import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  RadarChartOutlined,
  LineChartOutlined,
  BarChartOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

import Hero from '../Hero/Hero';
import GraphArea from '../GraphArea/GraphArea';
import GraphRadar from '../GraphRadar/GraphRadar';
import GraphBar from '../GraphBar/GraphBar';

class Main extends Component {
  componentDidMount() {
    this.setGraphType();

    if (!this.props.super) {
      let alpha = 440;
      let beta = 1336;
      this.fetchAllSuper();
      this.eggOneId(alpha);
      this.eggTwoId(beta);
    }
  }

  setGraphType = () => {
    this.props.dispatch({
      type: 'SET_LINE',
    });
  };

  changeGraphType = () => {
    const type = this.props.graph.type;

    if (type === 'LINE') {
      this.props.dispatch({ type: 'FETCH_BAR' });
    }
    if (type === 'RADAR') {
      this.props.dispatch({ type: 'FETCH_LINE' });
    }
    if (type === 'BAR') {
      this.props.dispatch({ type: 'FETCH_RADAR' });
    }
  };

  eggOneId = (value) => {
    this.props.dispatch({
      type: 'FETCH_EGGONE',
      params: { value },
    });
  };

  eggTwoId = (value) => {
    this.props.dispatch({
      type: 'FETCH_EGGTWO',
      params: { value },
    });
  };

  eggOneSearch = (value) => {
    const string = value;
    this.props.dispatch({
      type: 'FETCH_HERO',
      params: { string },
    });
  };

  eggTwoSearch = (value) => {
    const string = value;
    this.props.dispatch({
      type: 'FETCH_HERO',
      params: { string },
    });
  };

  fetchAllSuper = () => {
    this.props.dispatch({
      type: 'FETCH_ALL',
    });
  };

  render() {
    const type = this.props.graph.type;
    const eggOne = this.props.eggOne;
    const eggTwo = this.props.eggTwo;
    const superHero = this.props.superHero;

    return (
      <div className='main-root'>
        <div className='main-content-container'>
          {superHero ? (
            <>
              <Hero
                egg={superHero[eggOne.params.value]}
                heroId={this.eggOneId}
                searchFunction={this.eggOneSearch}
              />
              <Hero
                egg={superHero[eggTwo.params.value]}
                heroId={this.eggTwoId}
                searchFunction={this.eggTwoSearch}
              />
              <div className='graph-secondary'>
                <div
                  className='switch-icon'
                  onClick={this.changeGraphType}
                >
                  {type === 'BAR' ? (
                    <RadarChartOutlined
                      style={{ fontSize: 24 }}
                      onClick={this.changeGraphType}
                    />
                  ) : type === 'RADAR' ? (
                    <LineChartOutlined
                      style={{ fontSize: 24 }}
                      onClick={this.changeGraphType}
                    />
                  ) : type === 'LINE' ? (
                    <BarChartOutlined
                      style={{ fontSize: 24 }}
                      onClick={this.changeGraphType}
                    />
                  ) : (
                    <LoadingOutlined />
                  )}
                </div>

                {type === 'LINE' ? (
                  <GraphArea
                    eggData={[
                      superHero[eggOne.params.value],
                      superHero[eggTwo.params.value],
                    ]}
                  />
                ) : type === 'RADAR' ? (
                  <GraphRadar
                    eggData={[
                      superHero[eggOne.params.value],
                      superHero[eggTwo.params.value],
                    ]}
                  />
                ) : type === 'BAR' ? (
                  <GraphBar
                    eggData={[
                      superHero[eggOne.params.value],
                      superHero[eggTwo.params.value],
                    ]}
                  />
                ) : (
                  <LoadingOutlined />
                )}
              </div>
            </>
          ) : (
            <div className='loading-spinner'>
              <LoadingOutlined />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  eggOne: reduxState.eggOneReducer,
  eggTwo: reduxState.eggTwoReducer,
  graph: reduxState.graphTypeReducer,
  superHero: reduxState.superReducer,
  heroList: reduxState.heroReducer,
});

export default connect(mapReduxStateToProps)(Main);
