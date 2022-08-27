import React from 'react'
// import { images } from '../../images/logo.png';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav>
      <img 
        src={"../../images/logo.png"}
        alt="logo"
      />

      <h1>
        Data
      </h1>
    </nav>
  )
}

export default NavBar