import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AreaChart,
  Area,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
  XAxis,
} from 'recharts';

class GraphArea extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.eggOne !== prevProps.eggOne) {
      console.log('UPDATE GRAPH', this.props);
    }
    if (this.props.eggTwo !== prevProps.eggTwo) {
      console.log('UPDATE GRAPH', this.props);
    }
  }

  componentDidMount() {
    this.delayedState();
  }

  state = {
    showEgg: false,
  };

  delayedState = () => {
    if (!this.state.showEgg) {
      setTimeout(this.setState({ showEgg: true }), 3000);
    }
  };

  render() {
    const heroOne = this.props.data[0];
    const hero = this.props.data;
    const eggOne = this.props.eggOne;
    const eggTwo = this.props.eggTwo;
    const eggData = [eggOne, eggTwo];
    const result = [];
    console.log('PROPS', this.props);

    console.log('HEROONE', heroOne);
    console.log('HERO', hero);
    console.log('EGGONE', eggOne);
    console.log('EGGTWO', eggTwo);
    console.log('EGGTHREE', eggData);

    const comparePowerStats = Object.keys(
      this.props.data[0].powerstats
    );
    const changeGraph = () => {
      if (this.state.showEgg) {
        comparePowerStats.forEach(function (powerstat) {
          const statInfo = { powerstat };

          eggData.forEach(function (heroInfo) {
            statInfo[heroInfo.name] = heroInfo.powerstats[powerstat];
          });
          result.push(statInfo);
        });
      } else {
        comparePowerStats.forEach(function (powerstat) {
          const statInfo = { powerstat };

          hero.forEach(function (heroInfo) {
            statInfo[heroInfo.name] = heroInfo.powerstats[powerstat];
          });
          result.push(statInfo);
        });
      }
    };

    console.log('RESULT', result);

    changeGraph();

    // const result = [];

    return (
      <div className='graph'>
        <ResponsiveContainer height='100%' width='100%'>
          <AreaChart width={500} height={400} data={result}>
            <defs>
              <linearGradient
                id='colorA1'
                x1='0'
                y1='0'
                x2='0'
                y2='1'
              >
                <stop
                  offset='5%'
                  stopColor='#1890ff'
                  stopOpacity={0.8}
                />
                <stop
                  offset='95%'
                  stopColor='#1890ff'
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient
                id='colorA2'
                x1='0'
                y1='0'
                x2='0'
                y2='1'
              >
                <stop
                  offset='5%'
                  stopColor='#f5222d'
                  stopOpacity={0.8}
                />
                <stop
                  offset='95%'
                  stopColor='#f5222d'
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient
                id='colorB1'
                x1='0'
                y1='0'
                x2='0'
                y2='1'
              >
                <stop
                  offset='5%'
                  stopColor='#f5222d'
                  stopOpacity={0.8}
                />
                <stop
                  offset='95%'
                  stopColor='#f5222d'
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient
                id='colorB2'
                x1='0'
                y1='0'
                x2='0'
                y2='1'
              >
                <stop
                  offset='5%'
                  stopColor='#fa541c'
                  stopOpacity={0.8}
                />
                <stop
                  offset='95%'
                  stopColor='#fa541c'
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='powerstat' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type='monotone'
              dataKey={
                !this.state.showEgg ? hero[0].name : eggData[0].name
              }
              stroke={'#1890ff'}
              fillOpacity={1}
              fill={'url(#colorA1)'}
              activeDot={{ r: 6 }}
            />
            <Area
              type='monotone'
              dataKey={
                !this.state.showEgg ? hero[1].name : eggData[1].name
              }
              stroke={'#fa8c16'}
              fillOpacity={1}
              fill={'url(#colorB1)'}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    ); // end return
  } // end render
} // end class

const mapReduxStateToProps = (reduxState) => ({
  hero: reduxState.heroReducer,
  eggOne: reduxState.eggOneReducer,
  eggTwo: reduxState.eggTwoReducer,
});

export default connect(mapReduxStateToProps)(GraphArea);
