'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _d3Scale = require('d3-scale');

var _YAxis = require('./YAxis');

var _YAxis2 = _interopRequireDefault(_YAxis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<YAxis />', function () {
  it('renders child tick elements', function () {
    var height = 360;
    var yScale = (0, _d3Scale.scaleLinear)().domain([0, 100]).range([height, 0]);
    var axis = (0, _enzyme.render)(_react2.default.createElement(_YAxis2.default, { yScale: yScale, height: height }));
    expect(axis.find('.tick')).toMatchSnapshot();
  });

  it('renders the group element with a hashed class name', function () {
    var height = 360;
    var yScale = (0, _d3Scale.scaleLinear)().domain([0, 100]).range([height, 0]);
    var axis = (0, _enzyme.render)(_react2.default.createElement(_YAxis2.default, { yScale: yScale, height: height }));
    expect(axis.find('g').prop('class')).toBeDefined();
  });

  it('renders linear scale correctly', function () {
    // TODO
  });

  it('renders time scale correctly', function () {
    // TODO
  });

  it('handles different ticks input', function () {
    // TODO: using tickArguments
  });
});