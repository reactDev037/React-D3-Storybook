'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _enzyme = require('enzyme');

var _LineChart = require('./LineChart');

var _LineChart2 = _interopRequireDefault(_LineChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<LineChart />', function () {
  it('renders linear data', function () {
    var chartConfig = {
      width: 960,
      height: 320,
      data: [{ volume: 0, price: 9 }, { volume: 10, price: 30 }, { volume: 40, price: 10 }, { volume: 50, price: 40 }, { volume: 100, price: 30 }],
      fields: {
        x: 'volume',
        y: 'price'
      }
    };
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_LineChart2.default, chartConfig));
    expect(wrapper).toMatchSnapshot();
  });

  it('renders time series data of native date object', function () {
    var chartConfig = {
      width: 960,
      height: 320,
      data: [{ date: new Date(2017, 0, 1), price: 30 }, { date: new Date(2017, 0, 15), price: 20 }, { date: new Date(2017, 1, 1), price: 40 }],
      fields: {
        x: 'date',
        y: 'price'
      }
    };
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_LineChart2.default, chartConfig));
    expect(wrapper).toMatchSnapshot();
  });

  it('renders time series data of moment date object', function () {
    var chartConfig = {
      width: 960,
      height: 320,
      data: [{ date: (0, _moment2.default)('2017-01-01'), price: 30 }, { date: (0, _moment2.default)('2017-01-15'), price: 20 }, { date: (0, _moment2.default)('2017-02-01'), price: 40 }],
      fields: {
        x: 'date',
        y: 'price'
      }
    };
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_LineChart2.default, chartConfig));
    expect(wrapper).toMatchSnapshot();
  });

  it('handles data input format error', function () {
    var chartConfig = {
      width: 960,
      height: 320,
      data: [{ date: new Date(2017, 0, 1), price: 30 }, { date: new Date(2017, 0, 15), price: 20 }, { date: new Date(2017, 1, 1), price: 40 }],
      fields: {
        x: 'region',
        y: 'price'
      }
    };
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_LineChart2.default, chartConfig));
    expect(wrapper).toMatchSnapshot();
  });

  it('handles missing data properly', function () {
    // TODO: using tickArguments
  });

  it('handles partial data key pollution', function () {
    // TODO: using tickArguments
  });
});