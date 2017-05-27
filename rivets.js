var rivets = require('rivets')

function destroyRivetsView() {
  if (this.rivetsView) this.rivetsView.unbind()
}

module.exports = function(template, data) {
  if (!this.rivetsView) {
    this.on('destroy', destroyRivetsView, this)
  } else {
    this.rivetsView.unbind()
  }
  this.setInnerContent(this.el, template)
  this.rivetsView = rivets.bind(this.el, this)
}