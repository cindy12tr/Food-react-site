import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';
import { images } from '../../constants'
import { SubHeading } from '../../components';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]
const Gallery = () => {
  const scrollRef = React.useRef(null)

  const scroll = (direction)=>{
    const {current} = scrollRef;
    if(direction ==='left'){
      current.scrollLeft -=300
    } else{
      current.scrollLeft +=300
    }
  }
  return (
  <div className='gallery'>
    <div className='gallery-content'>
      <SubHeading title="Instagram"/>
      <h1>Galeri</h1>
      <p style={{color: '#AAA'}}>lorem</p>
      <button className='btn'>Daha Fazla</button>
    </div>

    <div className='gallery-images'>
      <div className='gallery-container' ref={scrollRef}>
          {galleryImages.map((image,index)=>(
            <div className='gallery-card' key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery-icon' />
            </div>

          ))}
      </div>
      <div className='gallery-arrows'>
        <BsArrowLeftShort className='arrow-icon' onClick={() => scroll('left')} />
        <BsArrowRightShort className='arrow-icon' onClick={() => scroll('right')} />
      </div>
    </div>
  </div>
  );
};

export default Gallery;
