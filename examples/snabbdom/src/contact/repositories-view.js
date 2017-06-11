import Marionette from 'backbone.marionette'
import itemTemplate from './repositoryitem.jsx'

const ItemView = Marionette.View.extend({
  tagName: 'li',

  template: itemTemplate,

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
    console.log('repositories view created')
  },

  childViewOptions() {
    return {owner: this.model}
  }
})

