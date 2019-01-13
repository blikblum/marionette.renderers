var rivets = require('rivets')

function destroyRivetsView() {
  if (this.rivetsView) this.rivetsView.unbind()
}

module.exports = function(template) {
  if (!this.rivetsView) {
    this.on('destroy', destroyRivetsView, this)
  } else {
    this.rivetsView.unbind()
  }
  this.attachElContent(template)
  this.rivetsView = rivets.bind(this.el, this)
}