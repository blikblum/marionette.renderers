var idom = require('incremental-dom')

module.exports = function(template, data) {
  idom.patchOuter(this.el, template, data)
}