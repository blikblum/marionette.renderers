import h from 'virtual-dom/h'
import hh from 'hyperscript-helpers'

let {div, h3, h5, input, textarea} = hh(h);


export default function(state){
  return [
    h3([`Contact Form View`]),
    h5([`(These fields update the model on key up)`]),
    div(".row", [
      div(".form-group.col-sm-6.keyup-input", [
        input(".form-control", {
          "attributes": {
            "type": "text",
            "name": "first_name",
            "placeholder": "First name",
            "value": state.first_name
          }
        })
      ]),
      div(".form-group.col-sm-6", [
        input(".form-control.keyup-input", {
          "attributes": {
            "type": "text",
            "name": "last_name",
            "placeholder": "Last name",
            "value": state.last_name
          }
        })
      ])
    ]),
    div(".form-group", [
      textarea(".form-control.keyup-input", {
        "attributes": {
          "rows": "3",
          "placeholder": "Short bio",
          "name": "short_bio"
        }
      }, [state.short_bio])
    ]),
    h5([`(These fields update the model on change)`]),
    div(".form-group", [
      input(".form-control", {
        "attributes": {
          "type": "email",
          "placeholder": "Email address",
          "name": "email",
          "value": state.email
        }
      })
    ]),
    div(".form-group", [
      input(".form-control", {
        "attributes": {
          "type": "text",
          "name": "twitter",
          "placeholder": "Twitter",
          "value": state.twitter
        }
      })
    ]),
    div(".form-group", [
      input(".form-control", {
        "attributes": {
          "type": "text",
          "placeholder": "Github",
          "name": "github",
          "value": state.github
        }
      })
    ]),
    div(".form-group", [
      input(".form-control", {
        "attributes": {
          "type": "text",
          "name": "website",
          "placeholder": "Website",
          "value": state.website
        }
      })
    ])
  ]
}