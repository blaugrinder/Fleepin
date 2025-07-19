import { FaFacebookF } from 'react-icons/fa'
import '../styles/Header.css'
import logo from '../assets/logo.png'
import xLogo from '../assets/x-logo.svg'


function Header() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </a>

      <div className="navbar-right">
        <nav className="navbar-links">
          <a href="#why">About us</a>
          <a href="#stats">Stats</a>
          <a href="#order">Order</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={xLogo} alt="X logo" className="social-icon-img" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
