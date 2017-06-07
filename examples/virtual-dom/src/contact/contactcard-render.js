import h from 'virtual-dom/h'
import hh from 'hyperscript-helpers'

let {a, div, h1, h3, h4, i, img, li, p, ul} = hh(h);

function cardLink(href, iconClass) {
  if (href) {
    return li([
      a({
        "attributes": {
          "href": href
        }
      }, [
        i(iconClass)
      ])
    ])
  }
}

export default function(data){
  return [
    h3([`Contact View`]),
    div(".contact-view", [
      div(".info", [
        data.email ? img({
          "attributes": {
            "src": data.gravatar
          }
        }) : null,
        h1([data.fullName]),
        p({innerHTML: data.short_bio})
      ]),
      ul(".links", [
        cardLink(data.github, ".fa.fa-github"),
        cardLink(data.twitter, ".fa.fa-twitter"),
        cardLink(data.website, ".fa.fa-link"),
      ])
    ]),
    h4([`Repositories`]),
    div(".repositories-view", [])
  ]
}

