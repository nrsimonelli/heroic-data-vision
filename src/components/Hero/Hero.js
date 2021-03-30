import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  LeftOutlined,
  RightOutlined,
  LoadingOutlined,
  ReloadOutlined,
} from '@ant-design/icons';

const Hero = (data) => {
  const hero = data.data;
  const heroId = data.heroId;
  const egg = data.egg;
  const eggData = [];
  console.log('props');

  const [eggState, setEggState] = useState(false);

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
    // if (!eggState) {
    //   setEggState(true);
    // }
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
    // if (!eggState) {
    //   setEggState(true);
    // }
  };

  const randClicked = async () => {
    let newHeroId = Math.floor(
      Math.random() * (Math.floor(723) - Math.ceil(0) + 1) +
        Math.ceil(0)
    );
    console.log('TESTING EGG:', egg);

    await heroId(newHeroId);
    eggData.push(egg);
    console.log('EGGDATA', eggData);
    // if (!eggState) {
    //   setEggState(true);
    // }
  };

  const showEggImage = () => {
    let image = '';
    if (eggState) {
      return image(
        <div
          className='image'
          style={{ backgroundImage: `url(${egg.image.url})` }}
        ></div>
      );
    } else {
      return (
        <div
          className='image'
          style={{ backgroundImage: `url(${hero.image.url})` }}
        ></div>
      );
    }
  };

  return (
    <div className='image-primary'>
      <div className='main-header-container'>
        <div className='title'>
          {hero !== undefined ? hero.name : <LoadingOutlined />}
        </div>
      </div>
      {/* <div
        className='image'
        style={
          egg === undefined
            ? { backgroundImage: `url(${hero.image.url})` }
            : { backgroundImage: `url(${hero.image.url})` }
        }
      ></div> */}
      {showEggImage()}
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

const mapReduxStateToProps = (reduxState) => ({
  hero: reduxState.heroReducer,
  eggOne: reduxState.eggOneReducer,
  eggTwo: reduxState.eggTwoReducer,
});

export default connect(mapReduxStateToProps)(Hero);
