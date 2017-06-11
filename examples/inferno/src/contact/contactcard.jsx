import RepositoryItem from './repositoryitem.jsx'

export default function({contact}){
  let {gravatar, github, fullName, short_bio, twitter, website} = contact.toJSON()

  return (<div id="contact-view" className="col-md-6">
    <h3>Contact View</h3>
    <div className="contact-view">
      <div className="info">

        {gravatar && <img src={gravatar}/>}

        <h1>{fullName}</h1>
        <p>{short_bio}</p>
      </div>
      <ul className="links">
        {github && <li>
          <a href={github}>
            <i className="fa fa-github"></i>
          </a>
        </li>}
        {twitter && <li>
          <a href={twitter}><i className="fa fa-twitter"></i></a>
        </li>}
        {website && <li>
          <a href={website}><i className="fa fa-link"></i></a>
        </li>}
      </ul>
    </div>
    <h4>Repositories</h4>
    <div className="repositories-view">
      <ul>
        {contact.repositories.map((repositorie) => {
          return <RepositoryItem model={repositorie}/>
        })}
      </ul>
    </div>
  </div>)
}

