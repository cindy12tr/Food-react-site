import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
return (
  <nav className='navbar'>
  <div className='navbar-logo'>
    <img src={images.gericht} alt="app logo" />
  </div>

  <ul className='navbar-links'>
    <li className='navbar-link'><a href="#home">Ana Sayfa</a> </li>
    <li className='navbar-link'><a href="#home">Hakkımızda</a> </li>
    <li className='navbar-link'><a href="#home">Menü</a> </li>
    <li className='navbar-link'><a href="#home">Chef</a> </li>
    <li className='navbar-link'><a href="#home">İletişim</a> </li>
  </ul>

  <div className='navbar-login'>
    <a href="#login">Giriş / Kayıt Ol</a>
    <div />
    <a href="/">Rezervasyon</a>
  </div>

  <div className='navbar-smallscreen'>
    <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)} />
    {toggleMenu &&

    <div className='navbar-smallscreen-menu slide-bottom'>
    <MdOutlineRestaurantMenu fontSize={27} className="overlay-close" onClick={()=>setToggleMenu(false)} />
      <ul className='navbar-smallscreen-links'>
        <li className='navbar-link'><a href="#home">Ana Sayfa</a> </li>
        <li className='navbar-link'><a href="#home">Hakkımızda</a> </li>
        <li className='navbar-link'><a href="#home">Menü</a> </li>
        <li className='navbar-link'><a href="#home">Chef</a> </li>
        <li className='navbar-link'><a href="#home">İletişim</a> </li>
      </ul>
      
    </div>
      }
    

  </div>


  </nav>
)
};

export default Navbar;
