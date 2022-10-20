import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaEnvelopeOpen} from 'react-icons/fa'
import {RiArrowDropDownLine} from 'react-icons/ri'
import './index.css'

const Header = props => {
  const {activeTabId, changeActiveTab} = props
  console.log(activeTabId)

  const userLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  const {match} = props
  const {path} = match

  return (
    <ul className="nav-background">
      <div className="nav-container">
        <li className="nav-item icon-container">
          <FaEnvelopeOpen className="icon-name" />
          Estatery
        </li>
        <Link to="/rent">
          <button type="button" onClick={() => changeActiveTab('rent')}>
            <li className={` nav-item ${path === '/rent' && 'active-tab'} `}>
              Rent
            </li>
          </button>
        </Link>
        <Link to="/buy">
          <button type="button" onClick={() => changeActiveTab('buy')}>
            <li className={` nav-item ${path === '/buy' && 'active-tab'} `}>
              Buy
            </li>
          </button>
        </Link>
        <Link to="/sell" className="nav-link">
          <li className={` nav-item  ${path === '/sell' && 'active-tab'} `}>
            Sell
          </li>
        </Link>
        <li className="nav-item">
          Manage Property <RiArrowDropDownLine />
        </li>
        <li className="nav-item">
          Resources
          <RiArrowDropDownLine />
        </li>
      </div>
      <div className="buttons-container">
        <button type="button" className="login-header-button">
          Login
        </button>
        <button type="button" className="logout-button" onClick={userLogout}>
          Signup
        </button>
      </div>
    </ul>
  )
}

export default withRouter(Header)
