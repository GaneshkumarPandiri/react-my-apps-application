// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, selectedTab, isSelected} = props
  const {tabId, displayText} = tabItem
  const selectedTabOf = () => {
    selectedTab(tabId)
  }

  const selectedTabStyle = isSelected ? 'active-tab-style' : ''

  return (
    <li className={`list-style ${selectedTabStyle}`} onClick={selectedTabOf}>
      <button type="button" className="button-style">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
