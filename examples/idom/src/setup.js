import 'bootstrap/dist/css/bootstrap.css'
import './main.scss'
import Marionette from 'backbone.marionette'
import 'backbone.syphon'
import 'backbone-computedfields'
import renderer from 'marionette.renderers/idom'
import idom from 'incremental-dom'
import 'jquery-bar-rating'
import 'jquery-bar-rating/dist/themes/fontawesome-stars.css'

Marionette.View.setRenderer(renderer)

idom.attributes.value = idom.applyProp;