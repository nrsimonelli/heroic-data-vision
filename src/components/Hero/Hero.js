import React from 'react';

const Hero = (props) => {
  return (
    <div className='image-primary'>
      <div className='main-header-container'>
        <div className='title'>{props.data.name}</div>
      </div>
      <div
        className='image'
        style={{
          backgroundImage: `url(${props.data.images.sm})`,
        }}
      ></div>
    </div>
  );
};
export default Hero;
