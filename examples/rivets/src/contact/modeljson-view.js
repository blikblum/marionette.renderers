import $ from 'jquery'
import Backbone from 'backbone'
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

  initialize(options){
    if (!this.model) this.model = new Backbone.Model()
    this.watched = options.watch;
    this._setWatchedModelJSON();
    return this.listenTo(this.watched, "change", this._setWatchedModelJSON);
  },

  _setWatchedModelJSON() {
    let json = JSON.stringify(this.watched.toJSON(), null, '  ');
    return this.model.set("modelJSON", json);
  },

  changeSampleClick(e) {
    let sampleName = $(e.currentTarget).data().sample
    this.watched.clear({silent: true})
    this.watched.set(sampleData[sampleName])
  }
})