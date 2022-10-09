import React from 'react'
import Logo from '../assets/img/logo.png'

const Header = () => {
  return (
    <div>
         <header>
            <div className="head">
                <a href="#"><img className='logo' src={Logo} alt="xeta" /></a>
                <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">How it Work</a></li>
                    <li><a href="#">Our Project</a></li>
                    <li><a href="#">Service</a></li>
                </ul>
                <button className="contact">Contact Us</button>
                <button className="menu-bar"><i className="fa-solid fa-bars"></i></button>
            </div>
        </header>
    </div>
  )
}

export default Header