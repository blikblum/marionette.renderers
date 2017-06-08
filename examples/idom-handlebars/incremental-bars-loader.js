var Handlebars = require('incremental-bars')

var transpilerOptions   = {
  minifyInput : true,   // OPTIONAL: minify input removing whitespaces and carriage returns (default is true)
  backend : 'idom',     // REQUIRED: Suppoorted backends: idom, html (to use default Handlebars)
  functionMap : {       // OPTIONAL: What function names should be generated for the various opcodes for this backend (see shared/opcodes.js). Defaults:
    'elementOpen'      : 'elementOpen',
    'elementClose'     : 'elementClose',
    'elementVoid'      : 'elementVoid',
    'text'             : 'text',
    'elementOpenStart' : 'elementOpenStart',
    'elementOpenEnd'   : 'elementOpenEnd',
    'attr'             : 'attr',
    'skip'             : 'skip'
  },
  hoistedStatics           : {},                // OPTIONAL (undefined). An object that will hold hoisted static string references (falsy value to disable)
  generateKeysForStaticEl  : false,             // OPTIONAL (false). Whether keys should be auto-generated for elements with only static properties (not recommended)
  generateKeysForAllEl     : true,              // OPTIONAL (true). Whether keys should be auto-generated for ALL elements (recommended, takes precedence over generateKeysForStaticEl)
  skipBlockAttributeMarker : 'data-partial-id', // OPTIONAL (data-partial-id). The attribute marker for elements that need to generate a 'skip' instruction (falsy to disable)
  emptySkipBlocks          : true,              // OPTIONAL (true). Whether instructions within skip blocks should be ignored / not be generated
  safeMergeSelfClosing     : true,              // OPTIONAL (true). Whether it is safe to merge open / close on ALL tags (true because this is safe with idom backends)
}

function getStaticsKeys(statics) {
  return Object.keys(statics).reduce((memo, item) => {
    memo += `${item} : ${JSON.stringify(statics[item])},`
    return memo
  }, '')
}

module.exports = function(source) {
  var compiled = Handlebars.precompile(source, {transpilerOptions: transpilerOptions})
  var statics = transpilerOptions.hoistedStatics;
  if (statics.__name) {
    staticsDeclaration = `
      var ${statics.__name} = {${getStaticsKeys(statics)}}
    `
  }
  return `var Handlebars = require('handlebars/runtime')
var IncrementalDOM = require('incremental-dom')
var elementOpen = IncrementalDOM.elementOpen
var elementClose = IncrementalDOM.elementClose
var elementVoid = IncrementalDOM.elementVoid
var text = IncrementalDOM.text
var elementOpenStart = IncrementalDOM.elementOpenStart
var elementOpenEnd = IncrementalDOM.elementOpenEnd
var attr = IncrementalDOM.attr
var skip = IncrementalDOM.skip

${staticsDeclaration}
  
module.exports = Handlebars.template(${compiled})
  `
}