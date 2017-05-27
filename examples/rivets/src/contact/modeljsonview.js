import Marionette from 'backbone.marionette'
import template from './modeljson-tpl.html'

export default Marionette.View.extend({
  attributes: {
    id: 'model-json-view'
  },
  
  
  template: template
})