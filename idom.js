var idom = require('incremental-dom')

module.exports = function(template, data) {
  idom.patch(this.el, template, data)
}