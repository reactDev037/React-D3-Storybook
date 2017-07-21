'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BarChart = require('./BarChart');

var _BarChart2 = _interopRequireDefault(_BarChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<BarChart />', function () {
  it('renders', function () {
    var chartConfig = {
      width: 960,
      height: 320,
      data: [{ region: 'CN', volume: 30 }, { region: 'BE', volume: 20 }, { region: 'TX', volume: 40 }, { region: 'JD', volume: 20 }, { region: 'DF', volume: 10 }, { region: 'OD', volume: 40 }],
      fields: {
        x: 'region',
        y: 'volume'
      }
    };
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_BarChart2.default, chartConfig));
    expect(wrapper).toMatchSnapshot();
  });

  it('handles data input format error', function () {
    var chartConfig = {
      width: 960,
      height: 320,
      data: [{ region: 'CN', volume: 30 }, { region: 'BE', volume: 20 }, { region: 'TX', volume: 40 }, { region: 'JD', volume: 20 }, { region: 'DF', volume: 10 }, { region: 'OD', volume: 40 }],
      fields: {
        x: 'type',
        y: 'volume'
      }
    };
    var wrapper = (0, _enzyme.render)(_react2.default.createElement(_BarChart2.default, chartConfig));
    expect(wrapper).toMatchSnapshot();
  });

  it('handles negative y value properly', function () {
    // TODO: using tickArguments
  });

  it('handles missing data properly', function () {
    // TODO: using tickArguments
  });

  it('handles partial data key pollution', function () {
    // TODO: using tickArguments
  });
});