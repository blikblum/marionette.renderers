import './setup'
import Marionette from 'backbone.marionette'
import ContactModel from './contact/model'
import ContactCardView from './contact/contactcard-view'
import ContactFormView from './contact/contactform-view'
import ModelJSONView from './contact/modeljson-view'
import sampleData from './contact/sampledata'

let MainView = Marionette.View.extend({
  el: '#main-view',

  regions: {
    contactcard: {el: '#contact-view', replaceElement: true},
    contactform: {el: '#contact-form-view', replaceElement: true},
    modeljson: {el: '#model-json-view', replaceElement: true}
  },

  initialize() {
    this.showChildView('contactcard', new ContactCardView({model: this.model}))
    this.showChildView('contactform', new ContactFormView({model: this.model}))
    this.showChildView('modeljson', new ModelJSONView({watch: this.model}))
  }
})

let contact = new ContactModel()
contact.set(sampleData.michael)

new MainView({model: contact})