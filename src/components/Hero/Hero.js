import React from 'react';
import {
  LeftOutlined,
  RightOutlined,
  LoadingOutlined,
  ReloadOutlined,
} from '@ant-design/icons';

const min = Math.ceil(0);
const max = Math.floor(723);
const rand = Math.floor(Math.random() * (max - min + 1) + min);

const Hero = (props) => {
  const hero = props.data;
  const heroId = props.heroId;

  const prevClicked = () => {
    let newHeroId = 50;
    if (hero.id > 0) {
      newHeroId = hero.id - 1;
    } else {
      newHeroId = 722;
    }
    console.log('previous was clicked current id is:', hero.id);
    console.log('newHeroId is:', newHeroId);
    heroId(newHeroId);
  };

  const nextClicked = () => {
    let newHeroId = 50;
    if (hero.id < 723) {
      newHeroId = Number(hero.id) + 1;
    } else {
      newHeroId = 0;
    }
    console.log('next was clicked current id is:', hero.id);
    console.log('newHeroId is:', newHeroId);
    heroId(newHeroId);
  };

  const randClicked = () => {
    let newHeroId = Math.floor(
      Math.random() * (Math.floor(723) - Math.ceil(0) + 1) +
        Math.ceil(0)
    );

    console.log('rand was clicked, last id was:', hero.id);
    console.log('new random id =', newHeroId);
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
