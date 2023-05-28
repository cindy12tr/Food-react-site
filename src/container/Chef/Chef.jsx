import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants'

import './Chef.css';

const Chef = () => (
  <div className='chef section-padding'>
    <div className='chef-img'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='chef-info'>
      <SubHeading title="Şefin Dünyası" />
      <h1>Neye İnanıyoruz ?</h1>

      <div className='chef-content'>
        <div className='chef-quote'>
          <img src={images.quote} alt="quote" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate itaque laboriosam? Ducimus omnis ab ipsa adipisci cupiditate? Veritatis.</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi omnis perferendis dolorem nulla perspiciatis corporis.</p>

      </div>

      <div className='chef-sign'>
        <p>Kevin Luo</p>
        <p>Chef & Kurucu</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
