var inferno = require('inferno')

module.exports = function (template, data) {
  let state = this.thisAsState ? this : data
  inferno.render(template(state), this.el)
}