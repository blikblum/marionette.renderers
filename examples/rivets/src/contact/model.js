import Backbone from 'backbone'
import md5 from 'js-md5'

export default Backbone.Model.extend({
  defaults: {
    first_name: '',
    last_name: '',
    short_bio: '',
    github: '',
    twitter: '',
    website: ''
  },

  initialize() {
    this.repositories = new Backbone.Collection()
    this.on('change:repositories', this.repositoriesChanged, this)
  },

  repositoriesChanged() {
    this.repositories.reset(this.get('repositories'))
  },
  
  getGravatar() {
    let email = this.get('email')
    if (!email) return ''
    return `http://www.gravatar.com/avatar/${md5(email)}`
  },

  getFullName() {
   return `${this.get('first_name')} ${this.get('last_name')}`   
  }
})