var idom = require('incremental-dom')

module.exports = function(template, data) {
  var state = this.thisAsState ? this : data
  var patchFn = this.outerRender ? idom.patchOuter : idom.patch
  patchFn(this.el, template, state)
}