import './setup'
import Marionette from 'backbone.marionette'
import ContactModel from './contact/model'
import ContactView from './contact/contactview'
import ContactFormView from './contact/contactformview'
import ModelJSONView from './contact/modeljsonview'
import sampleData from './contact/sampledata'

let MainView = Marionette.View.extend({
  el: '#main-view',
  
  regions: {
    contact: '#contact-view',
    contactform: '#contact-form-view',
    modeljson: '#model-json-view'
  },
  
  initialize() {
    this.showChildView('contact', new ContactView({model: this.model}))
    this.showChildView('contactform', new ContactFormView({model: this.model}))
    this.showChildView('modeljson', new ModelJSONView({model: this.model}))
  }
})


let contact = new ContactModel()
contact.set(sampleData.michael)

new MainView()