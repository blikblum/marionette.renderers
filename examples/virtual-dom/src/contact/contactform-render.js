import h from 'virtual-dom/h'
import hh from 'hyperscript-helpers'

let {div, h3, h5, input, textarea} = hh(h);


export default function(data){
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
            "value": data.first_name
          }
        })
      ]),
      div(".form-group.col-sm-6", [
        input(".form-control.keyup-input", {
          "attributes": {
            "type": "text",
            "name": "last_name",
            "placeholder": "Last name",
            "value": data.last_name
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
      }, [data.short_bio])
    ]),
    h5([`(These fields update the model on change)`]),
    div(".form-group", [
      input(".form-control", {
        "attributes": {
          "type": "email",
          "placeholder": "Email address",
          "name": "email",
          "value": data.email
        }
      })
    ]),
    div(".form-group", [
      input(".form-control", {
        "attributes": {
          "type": "text",
          "name": "twitter",
          "placeholder": "Twitter",
          "value": data.twitter
        }
      })
    ]),
    div(".form-group", [
      input(".form-control", {
        "attributes": {
          "type": "text",
          "placeholder": "Github",
          "name": "github",
          "value": data.github
        }
      })
    ]),
    div(".form-group", [
      input(".form-control", {
        "attributes": {
          "type": "text",
          "name": "website",
          "placeholder": "Website",
          "value": data.website
        }
      })
    ])
  ]
}