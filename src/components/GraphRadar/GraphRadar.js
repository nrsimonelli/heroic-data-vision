import React from 'react';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const GraphRadar = (props) => {
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
        <RadarChart
          outerRadius={80}
          width={500}
          height={500}
          data={result}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey='powerstat' />
          <PolarRadiusAxis angle={30} domain={[0, 110]} />
          <Radar
            name={heroOne.name}
            dataKey={heroOne.name}
            stroke={
              heroOne.biography.alignment === 'good'
                ? '#1890ff'
                : '#722ed1'
            }
            fill={
              heroOne.biography.alignment === 'good'
                ? '#1890ff'
                : '#722ed1'
            }
            fillOpacity={0.5}
            activeDot={{ r: 6 }}
          />
          <Radar
            name={heroTwo.name}
            dataKey={heroTwo.name}
            stroke={
              props.heroTwo.biography.alignment === 'good'
                ? '#fa8c16'
                : '#fa541c'
            }
            fill={
              heroTwo.biography.alignment === 'good'
                ? '#fa8c16'
                : '#fa541c'
            }
            fillOpacity={0.5}
            activeDot={{ r: 6 }}
          />
          <Tooltip />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default GraphRadar;
