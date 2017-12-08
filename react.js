var ReactDOM = require('react-dom')

function unmountReact() {
  ReactDOM.unmountComponentAtNode(this.el)
}

module.exports = function (template, data) {
  if (!this._reactMounted) {
    this.on('destroy', unmountReact, this)
    this._reactMounted = true
  }
  var state = this.thisAsState ? this : data
  ReactDOM.render(template.call(this, state), this.el)
}