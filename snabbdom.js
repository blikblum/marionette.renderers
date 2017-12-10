var snabbdom = require('snabbdom')
var vnode = require('snabbdom/vnode').default
var patch = snabbdom.init([ // Init patch function with chosen modules
  require('snabbdom/modules/attributes').default,
  require('snabbdom/modules/eventlisteners').default,
  require('snabbdom/modules/class').default,
  require('snabbdom/modules/props').default,
  require('snabbdom/modules/style').default,
  require('snabbdom/modules/dataset').default
])

module.exports = function (template, data) {
  var state = this.thisAsState ? this : data
  var newTree = template.call(this, state), rootTag
  if (this.outerRender) {
    rootTag = newTree.sel
  } else {
    rootTag = this.tagName
    newTree = vnode(rootTag, {}, Array.isArray(newTree) ? newTree : [newTree], undefined, this.el)
  }
  if (!this.elTree) {
    // small cheat to allow rendering root el
    // creates an empty vnode with the same sel as the rendered vtree
    // this ensure the view element will be properly patched
    var emptyTree = vnode(rootTag, {}, [], undefined, this.el)
    patch(emptyTree, newTree)
  } else {
    patch(this.elTree, newTree)
  }
  this.elTree = newTree
}