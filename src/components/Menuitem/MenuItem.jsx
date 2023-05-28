import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (
  <div className='menu-item'>
  <div className='menu-item-con'>
    <div className='menu-item-name'>
      <p style={{color: '#DCCA87'}}>{title}</p>
    </div>

    <div className='menu-item-line'/>


    <div className='menu-item-price'>
      <p>{price}</p>
    </div>
  </div>

  <div className='menu-item-sub'>
    <p style={{color: '#AAA'}}>{tags}</p>
  </div>

  </div>
);

export default MenuItem;
