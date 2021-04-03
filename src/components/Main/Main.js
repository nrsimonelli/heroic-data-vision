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

const STATIC_DATA = [
  {
    response: 'success',
    id: '70',
    name: 'Batman',
    powerstats: {
      intelligence: '100',
      strength: '26',
      speed: '27',
      durability: '50',
      power: '47',
      combat: '100',
    },
    biography: {
      'full-name': 'Bruce Wayne',
      'alter-egos': 'No alter egos found.',
      aliases: ['Insider', 'Matches Malone'],
      'place-of-birth': 'Crest Hill, Bristol Township; Gotham County',
      'first-appearance': 'Detective Comics #27',
      publisher: 'DC Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'2", '188 cm'],
      weight: ['210 lb', '95 kg'],
      'eye-color': 'blue',
      'hair-color': 'black',
    },
    work: {
      occupation: 'Businessman',
      base:
        'Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower',
    },
    connections: {
      'group-affiliation':
        'Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps',
      relatives:
        'Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family',
    },
    image: {
      url:
        'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
    },
  },
  {
    response: 'success',
    id: '720',
    name: 'Wonder Woman',
    powerstats: {
      intelligence: '88',
      strength: '100',
      speed: '79',
      durability: '100',
      power: '100',
      combat: '100',
    },
    biography: {
      'full-name': 'Diana Prince',
      'alter-egos': 'No alter egos found.',
      aliases: [
        'Princess Diana',
        'Princess of the Amazons',
        'Goddess of Truth',
        ' Wondy',
        'Wonder Girl',
        'The Amazon Princess',
      ],
      'place-of-birth': 'Themyscira',
      'first-appearance': 'All-Star Comics #8 (December, 1941)',
      publisher: 'DC Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Female',
      race: 'Amazon',
      height: ["6'0", '183 cm'],
      weight: ['165 lb', '74 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Black',
    },
    work: {
      occupation:
        'Adventurer, Emissary to the world of Man, Protector of Paradise Island; former Goddess of Truth',
      base: '-',
    },
    connections: {
      'group-affiliation':
        'Justice League of America, Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)',
      relatives:
        'Queen Hippolyta (mother, deceased), Donna Troy (Troia) (magically-created duplicate)',
    },
    image: {
      url:
        'https://www.superherodb.com/pictures2/portraits/10/100/807.jpg',
    },
  },
]; // starting heroes

class Main extends Component {
  componentDidMount() {
    this.setGraphType();
    this.delayRender();
    this.eggOneId(70);
    this.eggTwoId(720);
  }

  setGraphType = () => {
    this.props.dispatch({
      type: 'SET_LINE',
    });
  };

  delayRender = () => {
    this.setState({ loading: false });
  };

  changeGraphType = () => {
    const type = this.props.graph.type;
    console.log('type', type);
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
    const heroId = value;
    this.props.dispatch({
      type: 'FETCH_EGGONE',
      params: { heroId },
    });
    console.log('eggOne says:', value);
  };
  eggTwoId = (value) => {
    const heroId = value;
    this.props.dispatch({
      type: 'FETCH_EGGTWO',
      params: { heroId },
    });
    console.log('eggTwo says', value);
  };

  render() {
    const type = this.props.graph.type;
    const eggOneData = this.props.eggOne;
    const eggTwoData = this.props.eggTwo;
    const eggData = [eggOneData, eggTwoData];

    return (
      <div className='main-root'>
        <div className='main-content-container'>
          {eggOneData && eggTwoData ? (
            <>
              <Hero egg={eggOneData} heroId={this.eggOneId} />
              <Hero egg={eggTwoData} heroId={this.eggTwoId} />
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
                  <GraphArea eggData={eggData} data={STATIC_DATA} />
                ) : type === 'RADAR' ? (
                  <GraphRadar eggData={eggData} data={STATIC_DATA} />
                ) : type === 'BAR' ? (
                  <GraphBar eggData={eggData} data={STATIC_DATA} />
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
});

export default connect(mapReduxStateToProps)(Main);
