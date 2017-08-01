import React from 'react';
import { storiesOf } from '@storybook/react';

import { scaleLinear } from 'd3-scale';
import { Line } from 'finchart-shape';
import { ChartBase } from 'finchart-chart';

storiesOf('Line', module).add('standard', () => {
  const width = 960;
  const height = 360;
  const xScale = scaleLinear().domain([0, 100]).range([0, width]);
  const yScale = scaleLinear().domain([0, 100]).range([height, 0]);
  const data = [
    { supply: 0, price: 100 },
    { supply: 30, price: 90 },
    { supply: 100, price: 0 },
  ];
  const fields = {
    x: 'supply',
    y: 'price',
  };
  return (
    <ChartBase {...{ width, height }}>
      <Line {...{ height, width, xScale, yScale, data, fields }} />
    </ChartBase>
  );
});
