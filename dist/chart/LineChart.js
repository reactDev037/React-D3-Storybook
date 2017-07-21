'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n'], ['\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ChartBase = require('../chart/ChartBase');

var _ChartBase2 = _interopRequireDefault(_ChartBase);

var _XAxis = require('../axis/XAxis');

var _XAxis2 = _interopRequireDefault(_XAxis);

var _YAxis = require('../axis/YAxis');

var _YAxis2 = _interopRequireDefault(_YAxis);

var _AreaLine = require('../shape/AreaLine');

var _AreaLine2 = _interopRequireDefault(_AreaLine);

var _TargetLine = require('../shape/TargetLine');

var _TargetLine2 = _interopRequireDefault(_TargetLine);

var _scale = require('../util/scale');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Support primarily time series data
 * and needs to find out more actual use cases
 */
var Component = exports.Component = function (_PureComponent) {
  _inherits(Component, _PureComponent);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          width = _props.width,
          height = _props.height,
          padding = _props.padding,
          data = _props.data,
          fields = _props.fields,
          chartHeadroom = _props.chartHeadroom,
          targets = _props.targets,
          axisNames = _props.axisNames;

      var xScale = (0, _scale.createXScale)(data, fields, width);
      var yScale = (0, _scale.createYScale)(data, fields, height, chartHeadroom);

      return _react2.default.createElement(
        _ChartBase2.default,
        { className: className, width: width, height: height, padding: padding },
        targets ? _react2.default.createElement(_TargetLine2.default, { height: height, width: width, xScale: xScale, yScale: yScale, targets: targets }) : null,
        _react2.default.createElement(_AreaLine2.default, { height: height, width: width, xScale: xScale, yScale: yScale, data: data, fields: fields }),
        _react2.default.createElement(_XAxis2.default, _extends({ height: height, width: width, xScale: xScale }, { axisName: axisNames.x })),
        _react2.default.createElement(_YAxis2.default, _extends({ height: height, width: width, yScale: yScale }, { axisName: axisNames.y }))
      );
    }
  }]);

  return Component;
}(_react.PureComponent);

Component.propTypes = {
  className: _propTypes2.default.string,
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  padding: _propTypes2.default.number,
  data: _propTypes2.default.array.isRequired,
  fields: _propTypes2.default.object.isRequired,
  chartHeadroom: _propTypes2.default.number,
  targets: _propTypes2.default.array,
  axisNames: _propTypes2.default.object
};
Component.defaultProps = {
  padding: 60,
  chartHeadroom: 0.2,
  axisNames: {
    x: null, y: null
  }
};
exports.default = (0, _styledComponents2.default)(Component)(_templateObject);