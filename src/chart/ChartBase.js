import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

/**
 * Construct a Chart wrapper
 */
export class Component extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const {
      className,
      width,
      height,
      children,
    } = this.props;
    return (
      <svg {...{ className, width, height }}>
        <rect className="background" {...{ width, height }} />
        {children}
      </svg>
    );
  }
}

// TODO: update the styled approach to make it more readable
export default styled(Component)`
  display: block;
  padding: ${prop => prop.padding || 60}px;

  > rect.background {
    fill: lightblue;
    fill-opacity: 0.4;
  }
`;
