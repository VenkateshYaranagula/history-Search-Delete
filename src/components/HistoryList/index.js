import './index..css'

const HistoryList = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="container">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="logo" />
      <p className="title">{title}</p>
      <p className="logo">{domainUrl}</p>
      <div>
        <button onClick={onDelete} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryList
