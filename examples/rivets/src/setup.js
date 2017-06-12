import 'bootstrap/dist/css/bootstrap.css'
import './main.scss'
import rivets from 'rivets'
import 'rivets-backbone-adapter'
import 'backbone-computedfields'
import renderer from 'marionette.renderers/rivets'
import _ from 'underscore'
import Marionette from 'backbone.marionette'

Marionette.View.setRenderer(renderer)

// Custom Rivets formatter to replace text line breaks with <br>s
// See formatter docs here: http://www.rivetsjs.com/docs/#formatters\

rivets.formatters.linebreaksbr = function(value){
  return value.replace(/\n/g, '<br>')
}

rivets.formatters.stringify = function(value){
  return JSON.stringify(value, null, '  ')
}

rivets.formatters.prefix = function (value) {
  if (value != null) {
    var prefix = _.rest(arguments).reduce(function (memo, val) {
      return memo + val
    }, '')
    return prefix + value
  }
}