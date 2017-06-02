import Marionette from 'backbone.marionette'
import template from './contact-tpl.html'
import RepositoriesView from './repositories-view'

export default Marionette.View.extend({
  attributes: {
    id: 'contact-view'
  },

  className: 'col-md-6',

  template: template,

  modelEvents: {
    change: 'render'
  },

  regions: {
    repositories: '.repositories-view'
  },

  onRender() {
    // do not rerender repositories view
    if (!this.getRegion('repositories').hasView()) {
       this.showChildView('repositories', new RepositoriesView({model: this.model}))
    }
  }
})