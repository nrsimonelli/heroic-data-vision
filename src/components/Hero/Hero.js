import React, { useState } from 'react';
import {
  LeftOutlined,
  RightOutlined,
  LoadingOutlined,
  ReloadOutlined,
} from '@ant-design/icons';

const min = Math.ceil(0);
const max = Math.floor(520);
const rand = Math.floor(Math.random() * (max - min + 1) + min);

const Hero = (props) => {
  const [heroNum, setHeroNum] = useState(rand);

  const hero = props.data.heroReducer;

  const prevHero = () => {
    if (heroNum === 0) {
      setHeroNum(500);
    } else {
      setHeroNum(heroNum - 1);
    }
  };

  const randHero = () => {
    let x = Math.floor(Math.random() * (max - min + 1) + min);
    setHeroNum(x);
  };

  const nextHero = () => {
    if (heroNum === 500) {
      setHeroNum(0);
    } else {
      setHeroNum(heroNum + 1);
    }
  };

  return (
    <div className='image-primary'>
      <div className='main-header-container'>
        <div className='title'>
          {hero[0] !== undefined ? (
            hero[heroNum].name
          ) : (
            <LoadingOutlined />
          )}
        </div>
      </div>
      <div
        className='image'
        style={
          hero[0] !== undefined
            ? { backgroundImage: `url(${hero[heroNum].images.sm})` }
            : { backgroundColor: 'blue' }
        }
      ></div>
      <div className='hero-select'>
        <LeftOutlined
          className='icon'
          style={{ marginRight: 12 }}
          onClick={prevHero}
        />
        <ReloadOutlined className='icon' onClick={randHero} />
        <RightOutlined
          className='icon'
          style={{ marginLeft: 12 }}
          onClick={nextHero}
        />
      </div>
    </div>
  );
};

export default Hero;
