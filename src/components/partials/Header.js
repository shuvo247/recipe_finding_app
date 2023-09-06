import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="container">
            <div className='header'>
                <div className="logo">
                    {/* <img src={logo} alt="" /> */}
                    Logo
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/register'}>Register</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header