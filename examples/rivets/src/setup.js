import 'bootstrap/dist/css/bootstrap.css'
import './main.scss'
import renderer from '../../../src/rivets'
import Marionette from 'backbone.marionette'

Marionette.View.setRenderer(renderer)
