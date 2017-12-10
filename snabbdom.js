var init = require('snabbdom').init
var vnode = require('snabbdom/vnode').default

module.exports = function createRenderer (modules) {
  var patch = init(modules)
  return function renderTree (template, data) {
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
}