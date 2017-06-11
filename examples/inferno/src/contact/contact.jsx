import ContactCard from './contactcard.jsx'
import ContactForm from './contactform.jsx'
import ModelJSON from './modeljson.jsx'

export default function (state) {
  return (
  <div>
    <div class="row">
      <ContactForm contact={state.model}/>
      <ContactCard contact={state.model}/>
    </div>
    <ModelJSON contact={state.model}/>
  </div>
  )
}