import React from 'react';
import { scaleLinear } from 'd3-scale';

import XAxis from './_XAxis';

describe('<_XAxis />', () => {
  it('renders ticks as child elements correctly', () => {
    const width = 900;
    const height = 360;
    const margin = 20;
    const xScale = scaleLinear().range([0, width]).domain([0, 100]);
    const axis = render(<XAxis {...{ xScale, height, margin }} />);
    expect(axis).toMatchSnapshot();
  });

  it('renders the group element correctly', () => {
    const width = 900;
    const height = 360;
    const margin = 20;
    const xScale = scaleLinear().range([0, width]).domain([0, 100]);
    const axis = render(<XAxis {...{ xScale, height, margin }} />);
    expect(axis.find('g').prop('transform')).toBe(`translate(0,${height})`);
  });

  it('sets a hashed class name', () => {
    const width = 900;
    const height = 360;
    const xScale = scaleLinear().range([0, width]).domain([0, 100]);
    const axis = render(<XAxis {...{ xScale, height }} />);
    expect(axis.find('g').prop('class')).toBeDefined();
  });
});
