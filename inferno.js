var inferno = require('inferno')

module.exports = function (template, data) {
  var state = this.thisAsState ? this : data
  inferno.render(template.call(this, state), this.el)
}