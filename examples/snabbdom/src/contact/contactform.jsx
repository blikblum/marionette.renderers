import Snabbdom from 'snabbdom-pragma'

export default function(state){
  return <div id="contact-form-view">
  <h3>Contact Form View</h3>
  <h5>(These fields update the model on key up)</h5>
  <div className="row">
    <div className="form-group col-sm-6">
    <input type="text" name="first_name" className="form-control keyup-input" placeholder="First name" value={state.first_name}/>
    </div>
    <div className="form-group col-sm-6">
    <input type="text" name="last_name" className="form-control keyup-input" placeholder="Last name" value={state.last_name}/>
    </div>
    </div>
    <div className="form-group">
    <textarea name="short_bio" className="form-control keyup-input" rows="3" placeholder="Short bio" value={state.short_bio}></textarea>
    </div>
    <h5>(These fields update the model on change)</h5>
  <div className="form-group">
    <input type="email" name="email" className="form-control" placeholder="Email address" value={state.email}/>
    </div>
    <div className="form-group">
    <input type="text" name="twitter" className="form-control" placeholder="Twitter" value={state.twitter}/>
    </div>
    <div className="form-group">
    <input type="text" name="github" className="form-control" placeholder="Github" value={state.github}/>
    </div>
    <div className="form-group">
    <input type="text" name="website" className="form-control" placeholder="Website" value={state.website}/>
    </div>
  </div>
}
