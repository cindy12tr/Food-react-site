import React from 'react';
import './FindUs.css'
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='find section-padding' style={{backgroundColor: 'black',color: '#fff'}} id="contact">
    <div className="find-info">
      <SubHeading title="İletişim" />
      <h1 style={{ marginBottom: '3rem' }}>Bizi Bul</h1>
      <div className="find-cont">
        <p>Lale Caddesi, Whatcroft Hall Otel, İstanbul/Türkiye</p>
        <p style={{ color: '#DCCA87', margin: '2rem 0' }}>Açık Saatlerimiz</p>
        <p>Pazartesi - Cuma: 10:00 - 02:00 </p>
        <p>Cumartesi - Pazar: 10:00 - 03:00 </p>
      </div>
      <button type="button" className="btn" style={{ marginTop: '2rem' }}>Bizi Ziyaret Et</button>
    </div>

    <div className='find-img'>
      <img src={images.findus} alt="finus_img" style={{marginTop: '2rem'}} />
    </div>
  </div>
);

export default FindUs;