import 'bootstrap/dist/css/bootstrap.css'
import './main.scss'
import rivets from 'rivets'
import 'rivets-backbone-adapter'
import renderer from 'marionette.renderers/rivets'
import Marionette from 'backbone.marionette'

Marionette.View.setRenderer(renderer)

// Custom Rivets formatter to replace text line breaks with <br>s
// See formatter docs here: http://www.rivetsjs.com/docs/#formatters\

rivets.formatters.linebreaksbr = function(value){
  return value.replace(/\n/g, '<br>')
};
