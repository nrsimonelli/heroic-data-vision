import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  CartesianGrid,
} from 'recharts';

const GraphBar = (props) => {
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
        <BarChart width={500} height={400} data={result}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='stat' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            type='monotone'
            dataKey={heroOne.name}
            fill={'#1890ff'}
            fillOpacity={0.8}
          />
          <Bar
            type='monotone'
            dataKey={heroTwo.name}
            fill={'#f5222d'}
            fillOpacity={0.8}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default GraphBar;
