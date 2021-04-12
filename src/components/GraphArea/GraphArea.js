import React from 'react';
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

const GraphArea = (props) => {
  const heroOne = props.eggData[0];
  const heroTwo = props.eggData[1];
  const hero = props.eggData;

  const keys = [
    'intelligence',
    'strength',
    'speed',
    'durability',
    'power',
    'combat',
  ];

  const result = [];

  keys.forEach((stat) => {
    const statScore = { stat };
    hero.forEach((heroInfo) => {
      statScore[heroInfo.name] = heroInfo[stat];
    });
    result.push(statScore);
  });

  return (
    <div className='graph'>
      <ResponsiveContainer height='100%' width='100%'>
        <AreaChart width={500} height={400} data={result}>
          <defs>
            <linearGradient id='colorA1' x1='0' y1='0' x2='0' y2='1'>
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

            <linearGradient id='colorB1' x1='0' y1='0' x2='0' y2='1'>
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
          </defs>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='stat' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type='monotone'
            dataKey={heroOne.name}
            stroke={'#1890ff'}
            fillOpacity={1}
            fill={'url(#colorA1)'}
            activeDot={{ r: 6 }}
          />
          <Area
            type='monotone'
            dataKey={heroTwo.name}
            stroke={'#f5222d'}
            fillOpacity={1}
            fill={'url(#colorB1)'}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphArea;
