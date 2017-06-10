import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import template from './contactform.jsx'

export default Marionette.View.extend({
  tagName: 'form',

  attributes: {
    id: 'contact-form-view',
    role: 'form'
  },

  events: {
    'keyup .keyup-input': 'updateModel',
    'input input:not(.keyup-input)': 'updateModel'
  },

  modelEvents: {
    change: 'render'
  },

  className: 'col-md-6',

  template: template,

  updateModel(e) {
    let data = Backbone.Syphon.serialize(this)
    this.model.set(data)
  }
})