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
            stroke={'#1890ff'}
            fill={'#1890ff'}
            fillOpacity={0.5}
            activeDot={{ r: 6 }}
          />
          <Radar
            name={heroTwo.name}
            dataKey={heroTwo.name}
            stroke={'#f5222d'}
            fill={'#f5222d'}
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
