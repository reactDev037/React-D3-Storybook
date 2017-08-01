import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { XAxis, YAxis } from 'finchart-axis';
import { AreaLine, TargetLine } from 'finchart-shape';
import { createXScale, createYScale } from 'finchart-util';

import ChartBase from './ChartBase';

/**
 * Support primarily time series data
 * and needs to find out more actual use cases
 */
export class Component extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    padding: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    fields: PropTypes.shape({
      x: PropTypes.string.isRequired,
      y: PropTypes.string.isRequired,
    }).isRequired,
    chartHeadroom: PropTypes.number,
    axisNames: PropTypes.shape({
      x: PropTypes.string,
      y: PropTypes.string,
    }),
    targets: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    padding: 60,
    chartHeadroom: 0.2,
    axisNames: {
      x: null,
      y: null,
    },
  };

  render() {
    const {
      className,
      width,
      height,
      padding,
      data,
      fields,
      chartHeadroom,
      targets,
      axisNames,
    } = this.props;
    const xScale = createXScale(data, fields, width);
    const yScale = createYScale(data, fields, height, chartHeadroom);

    return (
      <ChartBase {...{ className, width, height, padding }}>
        {targets
          ? <TargetLine {...{ height, width, xScale, yScale, targets }} />
          : null}
        <AreaLine {...{ height, width, xScale, yScale, data, fields }} />
        <XAxis {...{ height, width, xScale }} axisName={axisNames.x} />
        <YAxis {...{ height, width, yScale }} axisName={axisNames.y} />
      </ChartBase>
    );
  }
}

export default styled(Component)`
`;
