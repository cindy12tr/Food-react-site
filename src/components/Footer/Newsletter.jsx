import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  <div className='newsletter'>
    <div className='newsletter-heading'>
      <SubHeading title='Bültenimiz' />
      <h1>Kayıt Ol</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>

    <div className='newsletter-input'>
      <input type="email" placeholder='Mail adresini gir' />
      <button className='btn'>Kayıt Ol</button>
    </div>
  </div>
);

export default Newsletter;
