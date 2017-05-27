import Marionette from 'backbone.marionette'
import template from './contact-tpl.html'

export default Marionette.View.extend({
  attributes: {
    id: 'contact-view'
  },
  
  className: 'col-md-6',
  
  template: template
})