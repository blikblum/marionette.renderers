import 'bootstrap/dist/css/bootstrap.css'
import './main.scss'
import Marionette from 'backbone.marionette'
import 'backbone.syphon'
import 'backbone-computedfields'
import Handlebars from 'handlebars/runtime'
import renderer from 'marionette.renderers/idom'
import idom from 'incremental-dom'

Marionette.View.setRenderer(renderer)

idom.attributes.value = idom.applyProp;

// setting innerHTML through attributes does not work properly
idom.attributes.innerhtml = function (el, prop, value) {
  el.innerHTML = value
  idom.skip()
}

// with helper also not
Handlebars.registerHelper('setInnerHTML', function (value) {
  let el = idom.currentElement()
  el.innerHTML = value
  idom.skip()
})

Handlebars.registerHelper('stringify', function (value) {
  return JSON.stringify(value, null, '  ')
})