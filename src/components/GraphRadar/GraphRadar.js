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
  return (
    <div className='graph'>
      <ResponsiveContainer height='100%' width='100%'>
        <RadarChart
          outerRadius={80}
          width={500}
          height={500}
          data={props.result}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey='powerstat' />
          <PolarRadiusAxis angle={30} domain={[0, 110]} />
          <Radar
            name={props.heroOne.name}
            dataKey={props.heroOne.name}
            stroke={
              props.heroOne.biography.alignment === 'good'
                ? '#1890ff'
                : '#722ed1'
            }
            fill={
              props.heroOne.biography.alignment === 'good'
                ? '#1890ff'
                : '#722ed1'
            }
            fillOpacity={0.5}
            activeDot={{ r: 6 }}
          />
          <Radar
            name={props.heroTwo.name}
            dataKey={props.heroTwo.name}
            stroke={
              props.heroTwo.biography.alignment === 'good'
                ? '#fa8c16'
                : '#fa541c'
            }
            fill={
              props.heroTwo.biography.alignment === 'good'
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
