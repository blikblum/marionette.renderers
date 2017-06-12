import h from 'virtual-dom/h'
import hh from 'hyperscript-helpers'

let {a, code, h3, header, pre} = hh(h);


export default function(state){
 return [
   header([
     h3([`Contact Model JSON View`]),
     `Load sample data:
    `,
     a({
       "attributes": {
         "href": "javascript:void(0);",
         "data-sample": "michael"
       }
     }, [`Michael,`]),
     a({
       "attributes": {
         "href": "javascript:void(0);",
         "data-sample": "mark"
       }
     }, [`Mark,`]),
     a({
       "attributes": {
         "href": "javascript:void(0);",
         "data-sample": "mason"
       }
     }, [`Mason`])
   ]),
   pre([
     code([JSON.stringify(state, null, '  ')])
   ])
 ]

}