import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  LeftOutlined,
  RightOutlined,
  ReloadOutlined,
} from '@ant-design/icons';

class Hero extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.eggOne !== prevProps.eggOne) {
      console.log('UPDATE PROPS', this.props);
    }
    if (this.props.eggTwo !== prevProps.eggTwo) {
      console.log('UPDATE PROPS', this.props);
    }
  }

  render() {
    const heroId = this.props.heroId;
    const egg = this.props.egg;
    const eggData = [];

    const randClicked = async () => {
      let newHeroId = Math.floor(
        Math.random() * (Math.floor(723) - Math.ceil(0) + 1) +
          Math.ceil(0)
      );

      await heroId(newHeroId);
      eggData.push(egg);
    };

    const prevClicked = () => {
      let newHeroId = 731;
      if (egg.id > 1) {
        newHeroId = egg.id - 1;
      }

      if (egg.id === 1) {
        newHeroId = 731;
      }

      heroId(newHeroId);
      eggData.push(egg);
    };

    const nextClicked = () => {
      let newHeroId = 1;
      if (egg.id < 731) {
        newHeroId = Number(egg.id) + 1;
      }

      if (egg.id === 731) {
        newHeroId = Number(1);
      }

      eggData.push(egg);
      heroId(newHeroId);
    };

    return (
      <div className='image-primary'>
        <div className='main-header-container'>
          <div className='title'>{egg.name}</div>
        </div>
        <div
          className='image'
          style={{
            backgroundImage: `url(${egg.image.url})`,
          }}
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
  }
}

const mapReduxStateToProps = (reduxState) => ({
  eggOne: reduxState.eggOneReducer,
  eggTwo: reduxState.eggTwoReducer,
});

export default connect(mapReduxStateToProps)(Hero);
