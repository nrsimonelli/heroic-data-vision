import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Popover } from 'antd';

import Search from '../Search/Search';

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

  handleVisibleChange = (showPopover) => {
    this.setState({ showPopover });
  };

  mouseOver = () => {
    this.setState({
      showPopover: true,
    });
  };

  mouseOut = () => {
    this.setState({
      showPopover: false,
    });
  };

  state = {
    showPopover: false,
  };

  render() {
    const heroId = this.props.heroId;
    const egg = this.props.egg;
    const eggData = [];
    const searchFunction = this.props.searchFunction;

    const {
      biography: {
        'full-name': fullName,
        'place-of-birth': placeOfBirth,
        'first-appearance': firstAppearance,
      },
      appearance: { 'eye-color': eyeColor },
    } = egg;

    const randClicked = async () => {
      let newHeroId = Math.floor(
        Math.random() * (Math.floor(723) - Math.ceil(0) + 1) +
          Math.ceil(0)
      );

      await heroId(newHeroId);
      eggData.push(egg);
    };

    const prevClicked = async () => {
      let newHeroId = 731;
      if (egg.id > 1) {
        newHeroId = egg.id - 1;
      }

      if (egg.id === 1) {
        newHeroId = 731;
      }

      await heroId(newHeroId);
      eggData.push(egg);
    };

    const nextClicked = async () => {
      let newHeroId = 1;
      if (egg.id < 731) {
        newHeroId = Number(egg.id) + 1;
      }

      if (egg.id === 731) {
        newHeroId = Number(1);
      }
      await heroId(newHeroId);
      eggData.push(egg);
      console.log('egg', egg);
      console.log('eggData', eggData);
    };

    const content = (
      <div>
        <p>
          {egg.appearance.race} {egg.appearance.gender}, {eyeColor}{' '}
          eyes, {egg.appearance.height[0]}, {egg.appearance.weight[0]}
        </p>
        <p>Birthplace: {placeOfBirth}</p>
        <p>First appearance {firstAppearance}</p>
        <p>Profession: {egg.work.occupation}</p>
      </div>
    );

    const title = <div>{fullName}</div>;

    return (
      <div className='image-primary'>
        <Search
          title={egg.name}
          search={searchFunction}
          list={this.props.heroList}
          setEgg={heroId}
        />
        <Popover
          placement='right'
          content={content}
          title={title}
          overlayClassName='popover'
          trigger='hover'
          onVisibleChange={this.handleVisibleChange}
        >
          <div
            className='image'
            style={{
              backgroundImage: `url(${egg.image.url})`,
            }}
          ></div>
        </Popover>

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
  heroList: reduxState.heroReducer,
});

export default connect(mapReduxStateToProps)(Hero);
