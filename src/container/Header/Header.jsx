import React from 'react';
import {SubHeading} from '../../components'
import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className='header section-padding' id='home'>
  <div className='header-info'>
  <SubHeading title="Yeni tadın peşinden git"/>
  <h1>Şehrin Yıldız Restoranı</h1>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, laudantium inventore. Reiciendis dignissimos mollitia, autem obcaecati totam harum unde eaque?</p>
  <button className='btn'>Daha Fazla</button>
  </div>

  <div className='header-img'>
  <img src={images.welcome} alt="welcome" />

  </div>

  </div>
);

export default Header;
