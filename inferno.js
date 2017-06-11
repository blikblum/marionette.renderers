var inferno = require('inferno')

module.exports = function (template, data) {
  inferno.render(template(data), this.el)
}