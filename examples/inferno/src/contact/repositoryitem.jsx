export default function({model}) {
  return <li>
    <a href={model.get('github') + '/' + model.get('name')}>{model.get('name')}</a>
  </li>
}
