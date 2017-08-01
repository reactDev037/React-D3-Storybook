import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { scaleLinear, scaleTime } from 'd3-scale';

import { XAxis } from 'finchart-axis';
import { ChartBase } from 'finchart-chart';

const xAxisStories = storiesOf('XAxis', module);

xAxisStories.addDecorator(withKnobs);

xAxisStories.add('linear scale', () => {
  const width = number('Width', 900);
  const height = number('Height', 360);
  const xScale = scaleLinear().range([0, width]).domain([0, 100]);
  return (
    <ChartBase {...{ width, height }}>
      <XAxis {...{ xScale, width, height }} />
    </ChartBase>
  );
});

xAxisStories.add('time scale', () => {
  const width = 900;
  const height = 360;
  const timeDomain = [new Date(2017, 0, 1), new Date(2017, 1, 1)];
  const xScale = scaleTime().domain(timeDomain).range([0, width]);
  return (
    <ChartBase {...{ width, height }}>
      <XAxis {...{ xScale, width, height }} />
    </ChartBase>
  );
});
