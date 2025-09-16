import { Link } from 'react-router'
import './Header.scss'

function Header() {
  return (
  <header className="global-header-wrapper">
    <div className="header-left">
      <Link to="/" className="header-left-link-el">
      <span>L</span>
      orenzo
      </Link>
    </div>
    <div className="header-right">
      <ul>
        <li><Link to="/aboutme">About Me</Link></li>
        <li><Link to="/portfolio">Portfolios</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li>Merchandising</li>
      </ul>
      <button>
      <i className="bi bi-person-circle fs-3" style={{
        fontSize: '1.5rem'
      }}></i>
        Sign In
      </button>
    </div>
  </header>
  )
}

export default Header