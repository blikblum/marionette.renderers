import Marionette from 'backbone.marionette'
import h from 'virtual-dom/h'
import hh from 'hyperscript-helpers'

let {a} = hh(h)

function repositoryItem(data) {
  return [a({href: data.github + '/' + data.name}, data.name)]
}

const ItemView = Marionette.View.extend({
  tagName: 'li',

  template: repositoryItem,

  initialize(options) {
    this.owner = options.owner
  },

  templateContext() {
    return {github: this.owner.get('github')}
  }
})

export default Marionette.CollectionView.extend({
  tagName: 'ul',

  childView: ItemView,

  initialize(options) {
    this.collection = options.model.repositories
  },

  childViewOptions() {
    return {owner: this.model}
  }
})

