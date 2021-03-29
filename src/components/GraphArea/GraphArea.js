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
  const heroOne = props.heroOne;
  const heroTwo = props.heroTwo;
  const result = props.result;

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
            <linearGradient id='colorA2' x1='0' y1='0' x2='0' y2='1'>
              <stop
                offset='5%'
                stopColor='#722ed1'
                stopOpacity={0.8}
              />
              <stop
                offset='95%'
                stopColor='#722ed1'
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient id='colorB1' x1='0' y1='0' x2='0' y2='1'>
              <stop
                offset='5%'
                stopColor='#fa8c16'
                stopOpacity={0.8}
              />
              <stop
                offset='95%'
                stopColor='#fa8c16'
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient id='colorB2' x1='0' y1='0' x2='0' y2='1'>
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
            dataKey={heroOne.name}
            stroke={
              heroOne.biography.alignment === 'good'
                ? '#1890ff'
                : '#722ed1'
            }
            fillOpacity={1}
            fill={
              heroOne.biography.alignment === 'good'
                ? 'url(#colorA1)'
                : 'url(#colorA2)'
            }
            activeDot={{ r: 6 }}
          />
          <Area
            type='monotone'
            dataKey={heroTwo.name}
            stroke={
              heroTwo.biography.alignment === 'good'
                ? '#fa8c16'
                : '#fa541c'
            }
            fillOpacity={1}
            fill={
              heroTwo.biography.alignment === 'good'
                ? 'url(#colorB1)'
                : 'url(#colorB2)'
            }
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default GraphArea;
