'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _d3Scale = require('d3-scale');

var _XAxis = require('./XAxis');

var _XAxis2 = _interopRequireDefault(_XAxis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<XAxis />', function () {
  it('renders child tick elements correctly', function () {
    var width = 900;
    var height = 360;
    var xScale = (0, _d3Scale.scaleLinear)().range([0, width]).domain([0, 100]);
    var axis = (0, _enzyme.render)(_react2.default.createElement(_XAxis2.default, { xScale: xScale, width: width, height: height }));
    var ticks = axis.find('.tick');
    expect(ticks).toMatchSnapshot();
  });

  it('renders domain axis', function () {
    var width = 900;
    var height = 360;
    var xScale = (0, _d3Scale.scaleLinear)().range([0, width]).domain([0, 100]);
    var axis = (0, _enzyme.render)(_react2.default.createElement(_XAxis2.default, { xScale: xScale, width: width, height: height }));
    var ticks = axis.find('.domain');
    expect(ticks).toMatchSnapshot();
  });

  it('renders axisName', function () {
    var width = 900;
    var height = 360;
    var xScale = (0, _d3Scale.scaleLinear)().range([0, width]).domain([0, 100]);
    var axis = (0, _enzyme.render)(_react2.default.createElement(_XAxis2.default, _extends({ xScale: xScale, width: width, height: height }, { axisName: 'axisName' })));
    var ticks = axis.find('.axisName');
    expect(ticks).toMatchSnapshot();
  });

  it('renders the svg group wrapper', function () {
    var width = 900;
    var height = 360;
    var xScale = (0, _d3Scale.scaleLinear)().range([0, width]).domain([0, 100]);
    var axis = (0, _enzyme.render)(_react2.default.createElement(_XAxis2.default, { xScale: xScale, width: width, height: height }));
    expect(axis.find('g').prop('transform')).toBe('translate(0,' + height + ')');
  });

  it('sets a hashed class name', function () {
    var width = 900;
    var height = 360;
    var xScale = (0, _d3Scale.scaleLinear)().range([0, width]).domain([0, 100]);
    var axis = (0, _enzyme.render)(_react2.default.createElement(_XAxis2.default, { xScale: xScale, width: width, height: height }));
    expect(axis.find('g').prop('class')).toBeDefined();
  });

  it('renders linear scale correctly', function () {
    var width = 900;
    var height = 360;
    var xScale = (0, _d3Scale.scaleLinear)().range([0, width]).domain([0, 100]);
    var axis = (0, _enzyme.render)(_react2.default.createElement(_XAxis2.default, { xScale: xScale, width: width, height: height }));
    var ticks = axis.find('.tick');
    expect(ticks).toMatchSnapshot();
  });

  it('renders time scale correctly', function () {
    var width = 900;
    var height = 360;
    var timeDomain = [new Date(2017, 0, 1), new Date(2017, 1, 1)];
    var xScale = (0, _d3Scale.scaleTime)().domain(timeDomain).range([0, width]);
    var axis = (0, _enzyme.render)(_react2.default.createElement(_XAxis2.default, { xScale: xScale, width: width, height: height }));
    var ticks = axis.find('.tick');
    expect(ticks).toMatchSnapshot();
  });

  it('handles different ticks input', function () {
    var width = 900;
    var height = 360;
    var xScale = (0, _d3Scale.scaleLinear)().range([0, width]).domain([0, 100]);
    var tickAmount = 5;
    var axis = (0, _enzyme.render)(_react2.default.createElement(_XAxis2.default, { xScale: xScale, width: width, height: height, tickAmount: tickAmount }));
    var ticks = axis.find('.tick');
    expect(ticks).toMatchSnapshot();
  });

  it('handles tickArguments over ticks', function () {
    // TODO: using tickArguments
  });
});