import React from 'react';
import videoSource from '../assets/vid.mp4'; // Make sure to provide the correct path


function Home() {
  return (
    <div className=''>
      <div className='text-[7vw] text-white mt-[10vw] ml-[6vw] '>Digitally crafted</div>
      <div className='text-[7vw] text-white ml-[26vw] '>Digitally crafted</div>
      <video className='w-[60%] ml-[20%] ' autoPlay muted loop>
        <source src={videoSource} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Home;
