import Snabbdom from 'snabbdom-pragma'

export default function(state){
  return (<div id="contact-view">
    <h3>Contact View</h3>
    <div className="contact-view">
      <div className="info">

        {state.email && <img src={state.gravatar}/>}

        <h1>{ state.fullName }</h1>
        <p>{state.short_bio}</p>
      </div>
      <ul className="links">
        {state.github && <li>
          <a href={state.github}>
            <i className="fa fa-github"></i>
          </a>
        </li>}
        {state.twitter && <li>
          <a href={state.twitter}><i className="fa fa-twitter"></i></a>
        </li>}
        {state.website && <li>
          <a href={state.website}><i className="fa fa-link"></i></a>
        </li>}
      </ul>
    </div>
    <h4>Repositories</h4>
    <div className="repositories-view">

    </div>
  </div>)
}

