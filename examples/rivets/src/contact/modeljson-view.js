import $ from 'jquery'
import Marionette from 'backbone.marionette'
import template from './modeljson-tpl.html'
import sampleData from './sampledata'

export default Marionette.View.extend({
  attributes: {
    id: 'model-json-view'
  },

  template: template,

  events: {
    'click a': 'changeSampleClick'
  },

  changeSampleClick(e) {
    let sampleName = $(e.currentTarget).data().sample
    this.model.clear({silent: true})
    this.model.set(sampleData[sampleName])
  }
})