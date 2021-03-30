import React from 'react';
import {
  LeftOutlined,
  RightOutlined,
  LoadingOutlined,
  ReloadOutlined,
} from '@ant-design/icons';

// const min = Math.ceil(0);
// const max = Math.floor(520);
// const rand = Math.floor(Math.random() * (max - min + 1) + min);

const Hero = (props) => {
  const hero = props.data;

  const prevClicked = () => {
    console.log('previous was clicked');
  };

  const nextClicked = () => {
    console.log('next was clicked');
  };

  const randClicked = () => {
    console.log('rand was clicked');
  };

  return (
    <div className='image-primary'>
      <div className='main-header-container'>
        <div className='title'>
          {hero !== undefined ? hero.name : <LoadingOutlined />}
        </div>
      </div>
      <div
        className='image'
        style={
          hero !== undefined
            ? { backgroundImage: `url(${hero.image.url})` }
            : {}
        }
      ></div>
      <div className='hero-select'>
        <LeftOutlined
          className='icon'
          onClick={prevClicked}
          style={{ marginRight: 24 }}
        />
        <ReloadOutlined className='icon' onClick={randClicked} />
        <RightOutlined
          className='icon'
          onClick={nextClicked}
          style={{ marginLeft: 24 }}
        />
      </div>
    </div>
  );
};

export default Hero;
