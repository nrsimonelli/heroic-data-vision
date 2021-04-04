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
  const sample = props.data[0];

  if (!sample) {
    return null;
  }
  const comparePowerStats = Object.keys(sample.powerstats);
  const result = [];

  comparePowerStats.forEach(function (powerstat) {
    const statInfo = { powerstat };
    hero.forEach(function (heroInfo) {
      statInfo[heroInfo.name] = heroInfo.powerstats[powerstat];
    });
    result.push(statInfo);
  });

  return (
    <div className='graph'>
      <ResponsiveContainer height='100%' width='100%'>
        <BarChart width={500} height={400} data={result}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='powerstat' />
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
