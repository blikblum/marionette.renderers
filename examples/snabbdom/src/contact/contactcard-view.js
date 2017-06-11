import Marionette from 'backbone.marionette'
import template from './contactcard.jsx'
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

  _reInitRegions() {},

  ensureChildView(regionName, ViewClass, options) {
    if (!this.getRegion(regionName).hasView()) {
      this.showChildView(regionName, new ViewClass(options))
    }
  },

  onRender() {
    // do not rerender repositories view
    this.ensureChildView('repositories', RepositoriesView, {model: this.model})
  }
})