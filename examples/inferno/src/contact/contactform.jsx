export default function({contact}){
  return <div id="contact-form-view" className="col-md-6">
  <h3>Contact Form View</h3>
  <h5>(These fields update the model on key up)</h5>
  <div className="row">
    <div className="form-group col-sm-6">
    <input type="text" name="first_name" className="form-control keyup-input" placeholder="First name" value={contact.get('first_name')}/>
    </div>
    <div className="form-group col-sm-6">
    <input type="text" name="last_name" className="form-control keyup-input" placeholder="Last name" value={contact.get('last_name')}/>
    </div>
    </div>
    <div className="form-group">
    <textarea name="short_bio" className="form-control keyup-input" rows="3" placeholder="Short bio" value={contact.get('short_bio')}></textarea>
    </div>
    <h5>(These fields update the model on change)</h5>
  <div className="form-group">
    <input type="email" name="email" className="form-control" placeholder="Email address" value={contact.get('email')}/>
    </div>
    <div className="form-group">
    <input type="text" name="twitter" className="form-control" placeholder="Twitter" value={contact.get('twitter')}/>
    </div>
    <div className="form-group">
    <input type="text" name="github" className="form-control" placeholder="Github" value={contact.get('github')}/>
    </div>
    <div className="form-group">
    <input type="text" name="website" className="form-control" placeholder="Website" value={contact.get('website')}/>
    </div>
  </div>
}
