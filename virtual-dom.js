var h = require('virtual-dom/h')
var diff = require('virtual-dom/diff')
var patch = require('virtual-dom/patch')
var createElement = require('virtual-dom/create-element')
var applyProperties = require('virtual-dom/vdom/apply-properties')

function initElement(node, children) {
  //virtual-dom does not provide an api to render the children of an element
  //applying patch in first render works but is not optimal
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
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
}

module.exports = function (template, data) {
  var state = this.thisAsState ? this : data
  var renderedTree = template.call(this, state), newTree
  if (this.outerRender) {
    newTree = Array.isArray(renderedTree) ? renderedTree[0] : renderedTree
  } else {
    newTree = h(this.tagName, {}, renderedTree)
  }
  if (!this.elTree) {
    //first render
    var node = this.el
    if (this.outerRender) {
      applyProperties(node, newTree.properties)
      initElement(node, newTree.children)
    } else {
      initElement(node, renderedTree)
    }
  } else {
    var treeDiff = diff(this.elTree, newTree)
    patch(this.el, treeDiff)
  }
  this.elTree = newTree
}