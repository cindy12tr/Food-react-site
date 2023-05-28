import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='about section-padding' id='about'>
    <div className='about-G'>
    <img src={images.G} alt="" />
    </div>

    <div className='about-content'>
      <div className='about-left'>
        <h1>Hakkımızda</h1>
        <img src={images.spoon} alt="" className='spoon' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium vel ea sint praesentium asperiores aspernatur fugiat molestias recusandae expedita.</p>
        <button className='btn'>Daha Fazla</button>
      </div>

      <div className='about-knife'>
      <img src={images.knife} alt="" />
    </div>

    <div className='about-right'>
        <h1>Tarihimiz</h1>
        <img src={images.spoon} alt="" className='spoon'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium vel ea sint praesentium asperiores aspernatur fugiat molestias recusandae expedita.</p>
        <button className='btn'>Daha Fazla</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
