import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { line } from 'd3-shape';

import { formatData, renderError } from 'finchart-util';

export class Component extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
    xScale: PropTypes.func.isRequired,
    yScale: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    fields: PropTypes.shape({
      x: PropTypes.string.isRequired,
      y: PropTypes.string.isRequired,
    }).isRequired,
    // defined: PropTypes.array,
    // curve: PropTypes.string,
  };

  static defaultProps = {
    curve: 'curveLinear',
  };

  render() {
    const {
      className,
      xScale,
      yScale,
      data,
      fields,
      // defined,
      // curve,
    } = this.props;

    const input = formatData(data, fields);

    const path = line().x(d => xScale(d.x)).y(d => yScale(d.y));

    return input
      ? <path className={`line-${className}`} d={path(input)} />
      : renderError();
  }
}

export default styled(Component)`
  fill: none;
  stroke: #2f7bba;
  stroke-width: 1.5;
`;

// TODO: support full features of line in D3
