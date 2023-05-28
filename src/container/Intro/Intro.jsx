import React, { useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import './Intro.css';
import {meal} from '../../constants'
import { MdVideoCameraFront } from 'react-icons/md';
const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = React.useRef();
  
  const handleVideo = () =>{
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    if(playVideo){
      vidRef.current.pause()
    } else{
      vidRef.current.play()
    }
  }

  return (
  <div className='intro'>
    <video src={meal} type="video/mp4" ref={vidRef} loop controls={false} muted />
    <div className='video-overlay'>
      <div className='video-overlay-circle' onClick={handleVideo}>
      {playVideo ? (<BsPauseFill color='#fff' fontSize={30} />) : <BsFillPlayFill color='#fff' fontSize={30} /> }

      </div>
    </div>
  </div>
  )
};

export default Intro;
