import h from 'virtual-dom/h'
import hh from 'hyperscript-helpers'

let {a, div, h1, h3, h4, i, img, li, p, ul} = hh(h);

function cardLink(href, iconClass) {
  if (href) {
    return li([
      a({href: href},
        [
          i(iconClass)
        ])
    ])
  }
}

export default function(state){
  return [
    h3([`Contact View`]),
    div(".contact-view", [
      div(".info", [
        state.email && img({src: state.gravatar}),
        h1([state.fullName]),
        p({innerHTML: state.short_bio})
      ]),
      ul(".links", [
        cardLink(state.github, ".fa.fa-github"),
        cardLink(state.twitter, ".fa.fa-twitter"),
        cardLink(state.website, ".fa.fa-link"),
      ])
    ]),
    h4([`Repositories`]),
    div(".repositories-view", [])
  ]
}

