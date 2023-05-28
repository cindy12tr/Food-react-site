import React from 'react';
import {SubHeading, MenuItem} from '../../components'
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='special-menu section-padding'id='menu'>
  <div className='special-heading'>
    <SubHeading title="Lorem seni bekliyor hadi gel" />
    <h1>Menü</h1>

  </div>

  <div className='special-menu-menu'>
    <div className='special-left'>
      <p className='special-title'>Şarap & Bira</p>
      <div className='special-items'>
      {data.wines.map((wine,index)=>(
        <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
      ))}
      </div>
    </div>

    <div className='special-img'>
      <img src={images.menu} alt="" />
    </div>

    <div className='special-right'>
      <p className='special-title'>Kokteyl</p>
      <div className='special-items'>
      {data.cocktails.map((cocktail,index)=>(
        <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
      ))}
      </div>
    </div>

  </div>

  <div style={{marginTop: '15px'}}>
    <button className='btn'>Daha Fazla</button>
  </div>
  </div>
);

export default SpecialMenu;
