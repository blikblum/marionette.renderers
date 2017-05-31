var snabbdom = require('snabbdom')
var patch = snabbdom.init([ // Init patch function with chosen modules
  require('snabbdom/modules/attributes').default,
  require('snabbdom/modules/eventlisteners').default,
  require('snabbdom/modules/class').default,
  require('snabbdom/modules/props').default,
  require('snabbdom/modules/style').default
])

module.exports = function (template, data) {
  var newVirtualTree = template(data)
  if (!this.elVirtualTree) {
    patch(this.el, newVirtualTree)
    this.elVirtualTree = newVirtualTree
  } else {
    patch(this.elVirtualTree, newVirtualTree)
  }
}