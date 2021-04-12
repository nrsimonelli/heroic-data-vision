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

const SAMPLE_DATA = [
  {
    id: 78,
    name: 'Aragorn',
    real_name: 'Aragorn II Elessar',
    full_name: null,
    overall_score: '7',
    history_text:
      "Aragorn II (1 March Third Age 2931 – Fourth Age 120, died aged 210 years) was the son of Arathorn II and Gilraen. He was the last Chieftain of the Dúnedain and a direct descendant through many generations of Isildur, the last High King of both Arnor and Gondor. Aragorn would become the greatest Man of his time, leading the Men of the West against Sauron's forces, helping to destroy the One Ring, and reuniting the Kingdoms of Arnor and Gondor.",
    powers_text: null,
    intelligence_score: 90,
    strength_score: 15,
    speed_score: 40,
    durability_score: 55,
    power_score: 55,
    combat_score: 100,
    superpowers:
      "['Accelerated Healing', 'Agility', 'Empathy', 'Intelligence', 'Longevity', 'Marksmanship', 'Omnilingualism', 'Stamina', 'Stealth', 'Weapon-based Powers', 'Weapons Master']",
    alter_egos: '[]',
    aliases: "['Estel, Telcontar, Thorongil, Strider']",
    place_of_birth: 'Eriador',
    first_appearance: null,
    alignment: 'Good',
    occupation:
      'Chieftain of the Dúnedain, King of the Reunited Kingdom',
    relatives:
      'Arwen(Wife),Eldarion(Son),Arathorn II(father),Gilraen(mother),Elrond(foster father)',
    gender: 'Male',
    type_race: 'Human',
    height: "6'6 • 198 cm",
    weight: '-',
    eye_color: 'Grey',
    hair_color: 'Brown',
    skin_color: null,
    img: '/pictures2/portraits/10/050/10859.jpg?v=1541758649',
  },
];

class Main extends Component {
  componentDidMount() {
    this.setGraphType();

    if (!this.props.super) {
      let alpha = Math.floor(Math.random() * 1450);
      let beta = Math.floor(Math.random() * 1450);
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
    this.props.dispatch({
      type: 'FETCH_EGGONE',
      params: { value },
    });
    console.log('eggOne says:', value);
  };

  eggTwoId = (value) => {
    this.props.dispatch({
      type: 'FETCH_EGGTWO',
      params: { value },
    });
    console.log('eggTwo says', value);
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

    console.log('eggOne', eggOne);
    console.log('eggTwo', eggTwo);

    console.log('superHero', superHero);

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
