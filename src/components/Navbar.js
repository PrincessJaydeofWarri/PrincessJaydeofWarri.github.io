import React, {useState, useEffect} from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './images/dloglow1.png'
import '../App.css'
import './Navbar.css'


function Navbar(){
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton ();
  }, [])

window.addEventListener("resize", showButton);

  return(
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            <img src={require('./images/dloglow1.png')} alt="jayde-logo"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>
              Home
              </Link>
            </li>
            <li>
            <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
            About
            </Link>
            </li>
            <li>
            <Link to="/work" className='nav-links' onClick={closeMobileMenu}>
            Work
            </Link>
            </li>
            <li>
            <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
            Contact
            </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar
