// The Backbone Model and Views for our example.
// Normally these would be split into their own files but
// for examples sake we're combinding everything here.

import Backbone from 'backbone'

export default Backbone.Model.extend({
  defaults: {
    first_name: '',
    last_name: '',
    short_bio: '',
    github: '',
    twitter: '',
    website: ''
  },
  
  getGravatar() {
    let email = this.get('email')
    if (!email) return ''
    return `http://www.gravatar.com/avatar/#${email}`
  },

  getFullName() {
   return `${this.get('first_name')} ${this.get('last_name')}`   
  }
})