import 'bootstrap/dist/css/bootstrap.css'
import './main.scss'
import Marionette from 'backbone.marionette'
import 'backbone.syphon'
import 'backbone-computedfields'
import renderer from 'marionette.renderers/idom'
import idom from 'incremental-dom'

Marionette.View.setRenderer(renderer)

idom.attributes.value = idom.applyProp;

//setting innerhtml does not work properly
idom.attributes.innerhtml = function (el, prop, value) {
  setTimeout(function () {
    el.innerHTML = value
  }, 0)
}