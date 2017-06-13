import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { axisBottom } from 'd3-axis';
import { select } from 'd3-selection';

export class Component extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
    xScale: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    tickAmount: PropTypes.number,
    tickArguments: PropTypes.array,
    tickFormat: PropTypes.func,
    tickSize: PropTypes.number,
    tickSizeInner: PropTypes.number,
    tickSizeOuter: PropTypes.number,
    tickOffset: PropTypes.number,
    labelText: PropTypes.string,
    labelOffset: PropTypes.number,
  };

  static defaultProps = {
    tickAmount: 10,
    tickArguments: null,
    tickFormat: null,
    tickSize: 0,
    tickSizeInner: 0,
    tickSizeOuter: 0,
    tickOffset: 10,
    labelOffset: 40,
  };

  componentDidMount() {
    this._renderAxis();
  }

  componentDidUpdate() {
    this._renderAxis();
  }

  _renderAxis() {
    const node = this.node;
    const {
      xScale,
      tickArguments,
      tickAmount,
      tickFormat,
      tickSize,
      tickSizeInner,
      tickSizeOuter,
      tickOffset,
    } = this.props;
    const axis = axisBottom(xScale)
      .tickArguments(tickArguments)
      .ticks(tickArguments ? null : tickAmount)
      .tickFormat(tickFormat)
      .tickSize(tickSize)
      .tickSizeInner(tickSize ? null : tickSizeInner)
      .tickSizeOuter(tickSize ? null : tickSizeOuter)
      .tickPadding(tickOffset);
    select(node).call(axis);
  }

  render() {
    const { className, xScale, height, labelText, labelOffset } = this.props;
    const width = xScale.range()[1];
    const transform = `translate(0,${height})`;
    const textTransform = `translate(${width / 2}, ${labelOffset})`;
    return (
      <g {...{ className, transform }} ref={(node) => { this.node = node; }} >
        <text className="label" transform={textTransform}>{labelText}</text>
      </g>
    );
  }
}

export default styled(Component)`
  shape-rendering: crispEdges;
  fill-opacity: 0.8;
  stroke-opacity: 0.8;
  stroke-width: 1px;

  .label {
    fill: black;
    font-weight: bold;
    text-anchor: middle;
  }

  .domain {
    fill: none;
  }
`;
