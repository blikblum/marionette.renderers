import Marionette from 'backbone.marionette'

const ItemView = Marionette.View.extend({
  tagName: 'li',

  template: `<a rv-href="model:name | prefix owner:github '/'">{model:name}</a>`,

  initialize(options) {
    this.owner = options.owner
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

