import './setup'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import ContactModel from './contact/model'
import sampleData from './contact/sampledata'
import ContactRender from './contact/contact.jsx'
import $ from 'jquery'

let MainView = Marionette.View.extend({
  el: '#main-view',

  thisAsState: true,

  template: ContactRender,

  modelEvents: {
    'change': 'render'
  },

  events: {
    'click #model-json-view a': 'changeSampleClick',
    'keyup #contact-form-view .keyup-input': 'updateModel',
    'input #contact-form-view input:not(.keyup-input)': 'updateModel'
  },

  updateModel(e) {
    let data = Backbone.Syphon.serialize(this)
    this.model.set(data)
  },

  changeSampleClick(e) {
    let sampleName = $(e.currentTarget).data().sample
    this.model.clear({silent: true})
    this.model.set(sampleData[sampleName])
  },

  onRender() {
    console.log('main view render')
  }
})

let contact = new ContactModel()
contact.set(sampleData.michael)

new MainView({model: contact}).render()