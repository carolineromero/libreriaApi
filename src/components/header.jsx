import React from 'react'
import logoLibrary from '../assets/img/logo04.png'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='headerContainer'>
      <img src={logoLibrary} alt="logo library" className='logo-libr' />
    <nav className='headerLine'>
       <h1 className='bar-text'>¡Empodérate leyendo!</h1>
       <ul>
         <li className="var-menu-btn">
           <Link to='/bookspage'className="nav-link">Home</Link>
         </li>
         <li className="var-menu-btn">
           <Link to='/newBook' className="nav-link" >Create</Link>
         </li>
        <li className="dropdown">
          <span>Registration</span>
        <div className="dropdown-content">
           <p>Sign In</p>
           <p>LogIn</p>
        </div>
        </li>
      </ul>
    </nav>     
</div>  
)
}

export default Header