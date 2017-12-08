var render = require('rect-dom').render

module.exports = function (template, data) {
  var state = this.thisAsState ? this : data
  render(template.call(this, state), this.el)
}