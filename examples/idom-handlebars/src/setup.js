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

idom.attributes.innerhtml = function (el, prop, value) {
  if (el.__innerHTML !== value) {
      el.__innerHTML = value;
      el.innerHTML = value;
  }
  idom.skip();
}

Handlebars.registerHelper('setInnerHTML', function (value) {
  const tagName = options.hash.tagName || 'div';
  const el = idom.elementOpen(tagName);

  if (el.__innerHTML !== content) {
    el.__innerHTML = content;
    el.innerHTML = content;
  }

  idom.skip();
  idom.elementClose(tagName);

  return '';
})

Handlebars.registerHelper('stringify', function (value) {
  return JSON.stringify(value, null, '  ')
})
