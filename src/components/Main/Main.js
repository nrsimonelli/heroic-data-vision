import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  LineChart,
  AreaChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const SAMPLE_DATA = [
  {
    id: 70,
    name: 'Batman',
    slug: '70-batman',
    powerstats: {
      intelligence: 100,
      strength: 26,
      speed: 27,
      durability: 50,
      power: 47,
      combat: 100,
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'2", '188 cm'],
      weight: ['210 lb', '95 kg'],
      eyeColor: 'blue',
      hairColor: 'black',
    },
    biography: {
      fullName: 'Bruce Wayne',
      alterEgos: 'No alter egos found.',
      aliases: ['Insider', 'Matches Malone'],
      placeOfBirth: 'Crest Hill, Bristol Township; Gotham County',
      firstAppearance: 'Detective Comics #27',
      publisher: 'DC Comics',
      alignment: 'good',
    },
    work: {
      occupation: 'Businessman',
      base:
        'Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower',
    },
    connections: {
      groupAffiliation:
        'Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps',
      relatives:
        'Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family',
    },
    images: {
      xs:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/70-batman.jpg',
      sm:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/70-batman.jpg',
      md:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/70-batman.jpg',
      lg:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/70-batman.jpg',
    },
  },
  {
    id: 644,
    name: 'Superman',
    slug: '644-superman',
    powerstats: {
      intelligence: 94,
      strength: 100,
      speed: 100,
      durability: 100,
      power: 100,
      combat: 85,
    },
    appearance: {
      gender: 'Male',
      race: 'Kryptonian',
      height: ["6'3", '191 cm'],
      weight: ['225 lb', '101 kg'],
      eyeColor: 'Blue',
      hairColor: 'Black',
    },
    biography: {
      fullName: 'Clark Kent',
      alterEgos: 'Superman Prime One-Million',
      aliases: [
        'Clark Joseph Kent',
        'The Man of Steel',
        'the Man of Tomorrow',
        'the Last Son of Krypton',
        'Big Blue',
        'the Metropolis Marvel',
        'the Action Ace',
      ],
      placeOfBirth: 'Krypton',
      firstAppearance: 'ACTION COMICS #1',
      publisher: 'Superman Prime One-Million',
      alignment: 'good',
    },
    work: {
      occupation: 'Reporter for the Daily Planet and novelist',
      base: 'Metropolis',
    },
    connections: {
      groupAffiliation:
        'Justice League of America, The Legion of Super-Heroes (pre-Crisis as Superboy); Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)',
      relatives:
        'Lois Lane (wife), Jor-El (father, deceased), Lara (mother, deceased), Jonathan Kent (adoptive father), Martha Kent (adoptive mother), Seyg-El (paternal grandfather, deceased), Zor-El (uncle, deceased), Alura (aunt, deceased), Supergirl (Kara Zor-El, cousin), Superboy (Kon-El/Conner Kent, partial clone)',
    },
    images: {
      xs:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/644-superman.jpg',
      sm:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/644-superman.jpg',
      md:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/644-superman.jpg',
      lg:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/644-superman.jpg',
    },
  },
];

class Main extends Component {
  componentDidMount = () => {
    console.log('hello from Main.js');
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWidth);
  };

  updateWidth = () => {
    this.setState({ width: window.innerWidth });
    console.log('window width is:', window.innerWidth);
  };

  changeGraphType = () => {
    this.setState({ switchGraph: !this.state.switchGraph });
  };

  state = {
    width: 0,
    switchGraph: true,
  };

  render() {
    const rawData = SAMPLE_DATA;

    const int = Object.assign(
      {},
      ...rawData.map((s) => ({
        name: 'intelligence',
        [s.name]: s.powerstats.intelligence,
      }))
    );
    const str = Object.assign(
      {},
      ...rawData.map((s) => ({
        name: 'strength',
        [s.name]: s.powerstats.strength,
      }))
    );
    const spd = Object.assign(
      {},
      ...rawData.map((s) => ({
        name: 'speed',
        [s.name]: s.powerstats.speed,
      }))
    );
    const dur = Object.assign(
      {},
      ...rawData.map((s) => ({
        name: 'durability',
        [s.name]: s.powerstats.durability,
      }))
    );
    const pow = Object.assign(
      {},
      ...rawData.map((s) => ({
        name: 'power',
        [s.name]: s.powerstats.power,
      }))
    );
    const com = Object.assign(
      {},
      ...rawData.map((s) => ({
        name: 'combat',
        [s.name]: s.powerstats.combat,
      }))
    );

    const data = [int, str, spd, dur, pow, com];

    return (
      <div className='main-root'>
        <div className='main-header-container'>
          <div className='title'>{SAMPLE_DATA[0].name}</div>
          <div className='select'>{SAMPLE_DATA[1].name}</div>
        </div>
        <div className='main-content-container'>
          <div className='image-primary'>
            <div
              className='image'
              style={{
                backgroundImage: `url(${SAMPLE_DATA[0].images.sm})`,
              }}
            ></div>
          </div>
          <div className='image-primary'>
            <div
              className='image'
              style={{
                backgroundImage: `url(${SAMPLE_DATA[1].images.sm})`,
              }}
            ></div>
          </div>
          {/* <div className='graph-primary'>
            <div className='graph'></div>
          </div> */}
          <div className='graph-secondary'>
            <div
              className='switch-icon'
              onClick={this.changeGraphType}
            >
              {this.state.switchGraph ? 'click me' : 'switch back'}
            </div>
            <div className='graph'>
              <ResponsiveContainer height='100%' width='100%'>
                <LineChart width={500} height={400} data={data}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='name' />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type='monotone'
                    dataKey={rawData[0].name}
                    stroke={
                      rawData[0].biography.alignment === 'good'
                        ? '#1890ff'
                        : '#722ed1'
                    }
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type='monotone'
                    dataKey={rawData[1].name}
                    stroke={
                      rawData[1].biography.alignment === 'good'
                        ? '#fa8c16'
                        : '#fa541c'
                    }
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Main);
