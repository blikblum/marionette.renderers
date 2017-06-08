var h = require('virtual-dom/h')
var diff = require('virtual-dom/diff')
var patch = require('virtual-dom/patch')
var createElement = require('virtual-dom/create-element')
var _ = require('underscore')

function createVirtualTree(view, children) {
  var attrs = _.extend({}, _.result(view, 'attributes'))
  var className = _.result(view, 'className')
  if (className) attrs.className = className
  return h(view.tagName, attrs, children)
}

module.exports = function (template, data) {
  var children = template(data)
  let newVirtualTree = createVirtualTree(this, children)
  if (!this.elVirtualTree) {
    //first render
    //virtual-dom does not provide an api to render the children of an element
    //applying patch in first render works but is not optimal
    var node = this.el
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var childNode = createElement(children[i])
        if (childNode) {
          node.appendChild(childNode)
        }
      }
    } else {
      node.appendChild(createElement(children))
    }
  } else {
    var treeDiff = diff(this.elVirtualTree, newVirtualTree)
    patch(this.el, treeDiff)
  }
  this.elVirtualTree = newVirtualTree
}