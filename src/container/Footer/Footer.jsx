import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='footer section-padding app-bg'>
    <Newsletter />

    <div className='footer-links'>
      <div className='footer-content'>
          <h1>İletişim</h1>
          <p>Abs Otel</p>
          <p>+90 212-222-2323</p>
          <p>+90 212-222-2323</p>
      </div>
      <div className='footer-logo'>
        <img src={images.gericht} alt="footer logo" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, dolore.</p>
        <img src={images.spoon} className="spoon-img" style={{marginTop: '15' }} alt="" />
        <div className='footer-links-icons'>
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
        </div>
      </div>
      <div className='footer-work'>
        <h1>Çalışma Saatlerimiz</h1>
        <p>Pazartesi-Cuma</p>
        <p>08:00 - 12.00 </p>
        <br/>
        <p>Cumartesi-Pazar</p>
        <p>07:00 - 11.00 </p>
      </div>
    </div>
    
    <div className='copyright'>
      <p className='copy'>2023 handecedim</p>
    </div>
  </div>
);

export default Footer;
