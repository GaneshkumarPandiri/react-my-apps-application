// Write your code here
import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem
  return (
    <li className="app-content">
      <img src={imageUrl} alt={appName} className="app-icon-style" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
