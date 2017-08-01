import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

import LineChart from './LineChart';

export class Component extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
    padding: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    fields: PropTypes.shape({
      x: PropTypes.string.isRequired,
      y: PropTypes.string.isRequired,
    }).isRequired,
    axisNames: PropTypes.shape({
      x: PropTypes.string,
      y: PropTypes.string,
    }),
    chartHeadroom: PropTypes.number,
    targets: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    padding: 45,
    chartHeadroom: 0.2,
    axisNames: {
      x: null,
      y: null,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
    const DEBOUNCE_TIME = 300;
    this.debounceResize = debounce(() => this.resize(), DEBOUNCE_TIME);
  }

  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.debounceResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceResize, false);
  }

  resize() {
    if (this.container) {
      const { height, width } = this.container.getBoundingClientRect();
      this.setState({ width, height });
    }
  }

  render() {
    let { width, height } = this.state;
    const { className, padding, ...restChartProps } = this.props;
    width -= 2 * padding;
    height -= 2 * padding;
    width = width > 0 ? width : 0;
    height = height > 0 ? height : 0;
    return (
      <div
        {...{ className }}
        ref={ref => {
          this.container = ref;
        }}
      >
        <LineChart {...{ width, height, padding }} {...restChartProps} />
      </div>
    );
  }
}

export default styled(Component)`
  position: relative;
  width: 100%;
  height: 100%;
`;
