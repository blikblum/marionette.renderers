## marionette.renderers

> Collection of custom renderers for Marionette.js

### Usage

Import the desired renderer
 
```javascript
// with ES modules
import renderer from 'marionette.renderers/[rederer-name]'

// or with CommonJS modules
var renderer = require('marionette.renderers/[rederer-name]')
  ```
  
  
Configure the Marionette View class
```javascript
//all views
Marionette.View.setRenderer(renderer)

//or specific view class
var MyView = Marionette.View.extend()
MyView.setRenderer(renderer)
```
  
Set `template` property when defining a view. The format of each template vary with the renderer type

```javascript
import template from './my-template'
var MyView = Marionette.View.extend({
  template: template
})
```

### Options

Is possible to configure the rendering with options defined in the View class:

`outerRender` **Boolean**

By default all renderers set the inner contents of the View `el`. Some renderers allows to
define the outerHTML, i.e., define the attributes of View `el` in the template.

`thisAsState` **Boolean**

By default the data returned by [`serializeData`](https://marionettejs.com/docs/master/template.html#serializing-model-and-collection-data) is passed to the template. By setting `thisAsState` to true
the view instance will be passed to the template.

### Renderers

#### rivets

Uses [rivets](http://rivetsjs.com) as template engine. By its nature (data binding) the view instance is always passed to the template

 * Supports `outerRender`: no 
 
#### virtual-dom

Uses [virtual-dom](https://github.com/Matt-Esch/virtual-dom) to render the HTML

 * Supports `outerRender`: yes  
 
#### snabbdom

Uses [snabbdom](https://github.com/snabbdom/snabbdom) to render the HTML

 * Supports `outerRender`: yes
 
#### idom

Uses [incremental-dom](https://github.com/google/incremental-dom) to render the HTML

 * Supports `outerRender`: technically yes, but the template transpiler should not
  set key for root element. See this [issue](https://github.com/davidjamesstone/superviews.js/issues/39).

#### inferno

Uses [inferno](https://github.com/infernojs/inferno/) to render the HTML

 * Supports `outerRender`: no


### Examples

See actual examples in the examples folder of this repository  