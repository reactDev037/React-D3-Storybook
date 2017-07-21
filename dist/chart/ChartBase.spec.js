'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ChartBase = require('./ChartBase');

var _ChartBase2 = _interopRequireDefault(_ChartBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<ChartBase />', function () {
  it('renders', function () {
    var chartConfig = {
      width: 960,
      height: 320
    };
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_ChartBase2.default, chartConfig));
    expect(wrapper).toMatchSnapshot();
  });

  it('renders children elements', function () {});
});