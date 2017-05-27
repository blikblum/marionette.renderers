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
    contact: {el: '#contact-view', replaceElement: true},
    contactform: {el: '#contact-form-view', replaceElement: true},
    modeljson: {el: '#model-json-view', replaceElement: true}
  },
  
  initialize() {
    this.showChildView('contact', new ContactView({model: this.model}))
    this.showChildView('contactform', new ContactFormView({model: this.model}))
    this.showChildView('modeljson', new ModelJSONView({watch: this.model}))
  }
})

let contact = new ContactModel()
contact.set(sampleData.michael)

new MainView({model: contact})