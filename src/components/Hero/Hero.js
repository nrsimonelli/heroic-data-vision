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

    const randClicked = async () => {
      let newHeroId = Math.floor(Math.random() * 1396);

      await heroId(newHeroId);
      eggData.push(egg);
    };

    const prevClicked = async () => {
      let newHeroId = 1396;
      if (egg.id > 1) {
        newHeroId = egg.id - 2;
      }

      if (egg.id === 1) {
        newHeroId = 1396;
      }

      await heroId(newHeroId);
      eggData.push(egg);
    };

    const nextClicked = async () => {
      let newHeroId = 1;
      if (egg.id < 1397) {
        newHeroId = Number(egg.id);
      }

      if (egg.id === 1397) {
        newHeroId = Number(0);
      }
      await heroId(newHeroId);
      eggData.push(egg);
      console.log('egg', egg);
      console.log('eggData', eggData);
    };

    const content = (
      <div>
        <p>
          {!egg.type_race ? 'Race unknown, ' : egg.type_race}{' '}
          {!egg.gender ? 'gender unknown' : egg.gender}
        </p>
        <p>
          {egg.height === '-'
            ? 'Biometrics: unknown'
            : egg.height + ', ' + egg.weight}
        </p>
        <p>
          Birthplace:{' '}
          {!egg.place_of_birth ? 'unknown' : egg.place_of_birth}
        </p>
        <p>
          First appearance:{' '}
          {!egg.first_appearance ? 'unknown' : egg.first_appearance}
        </p>
        <p>
          Profession: {!egg.occupation ? 'unknown' : egg.occupation}
        </p>
      </div>
    );

    const title = (
      <div>
        {!egg.real_name
          ? !egg.full_name
            ? egg.name
            : egg.full_name
          : egg.real_name}
      </div>
    );

    const image = 'https://www.superherodb.com' + egg.img;

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
              backgroundImage: `url(${image})`,
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
