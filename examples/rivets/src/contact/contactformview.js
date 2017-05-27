import Marionette from 'backbone.marionette'
import template from './contactform-tpl.html'

export default Marionette.View.extend({
  tagName: 'form',
  
  attributes: {
    id: 'contact-form-view',
    role: 'form'
  },
  
  className: 'col-md-6',
  
  template: template
})