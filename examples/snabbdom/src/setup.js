import 'bootstrap/dist/css/bootstrap.css'
import './main.scss'
import Marionette from 'backbone.marionette'
import 'backbone.syphon'
import 'backbone-computedfields'
import createRenderer from 'marionette.renderers/snabbdom'
import 'jquery-bar-rating'
import 'jquery-bar-rating/dist/themes/fontawesome-stars.css'

const renderer = createRenderer([ // Init patch function with chosen modules
  require('snabbdom/modules/attributes').default,
  require('snabbdom/modules/eventlisteners').default,
  require('snabbdom/modules/class').default,
  require('snabbdom/modules/props').default,
  require('snabbdom/modules/style').default,
  require('snabbdom/modules/dataset').default
])

Marionette.View.setRenderer(renderer)
Marionette.View.prototype.outerRender = true