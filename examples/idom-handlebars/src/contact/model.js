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
    this.computedFields = new Backbone.ComputedFields(this)
    this.repositories = new Backbone.Collection()
    this.on('change:repositories', this.repositoriesChanged, this)
  },

  repositoriesChanged() {
    this.repositories.reset(this.get('repositories'))
  },

  computed: {
    gravatar: {
      depends: ['email'],
      get: function(fields) {
        if (!fields.email) return ''
        return `http://www.gravatar.com/avatar/${md5(fields.email)}`
      }
    },
    fullName: {
      depends: ['first_name', 'last_name'],
      get: function(fields) {
        return `${fields.first_name} ${fields.last_name}`
      }
    }
  }
})