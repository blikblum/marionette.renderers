import Snabbdom from 'snabbdom-pragma'

export default function(state) {
  return <li>
    <a href={state.github + '/' + state.name}>{state.name}</a>
  </li>
}
