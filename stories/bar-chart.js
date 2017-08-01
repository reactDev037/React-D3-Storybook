import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, array, object } from '@storybook/addon-knobs';

import { BarChart } from '../src';

storiesOf('BarChart', module)
  .addDecorator(withKnobs)
  .add('standard', () => {
    const chartConfig = {
      width: number('Width', 960),
      height: number('Height', 320),
      data: array('Data', [
        { region: 'CN', volume: 30 },
        { region: 'BE', volume: 20 },
        { region: 'TX', volume: 40 },
        { region: 'JD', volume: 20 },
        { region: 'DF', volume: 10 },
        { region: 'OD', volume: 40 },
      ]),
      fields: object('Fields', {
        x: 'region',
        y: 'volume',
      }),
    };
    return <BarChart {...chartConfig} />;
  })
  .add('input format error', () => {
    const chartConfig = {
      width: 960,
      height: 320,
      data: [
        { region: 'CN', volume: 30 },
        { region: 'BE', volume: 20 },
        { region: 'TX', volume: 40 },
        { region: 'JD', volume: 20 },
        { region: 'DF', volume: 10 },
        { region: 'OD', volume: 40 },
      ],
      fields: {
        x: 'type',
        y: 'volume',
      },
    };
    return <BarChart {...chartConfig} />;
  });
