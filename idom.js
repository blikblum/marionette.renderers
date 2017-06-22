var idom = require('incremental-dom')

module.exports = function(template, data) {
  var state = this.thisAsState ? this : data
  idom.patch(this.el, template, state)
}