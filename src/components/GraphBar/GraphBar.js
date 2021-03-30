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
  const heroOne = props.heroOne;
  const heroTwo = props.heroTwo;
  const hero = props.data;

  const comparePowerStats = Object.keys(hero[0].powerstats);
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
            fill={
              heroOne.biography.alignment === 'good'
                ? '#1890ff'
                : '#722ed1'
            }
            fillOpacity={0.9}
          />
          <Bar
            type='monotone'
            dataKey={heroTwo.name}
            fill={
              heroTwo.biography.alignment === 'good'
                ? '#fa8c16'
                : '#fa541c'
            }
            fillOpacity={0.9}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default GraphBar;
