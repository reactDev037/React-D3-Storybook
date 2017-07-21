'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  shape-rendering: crispEdges;\n  fill: darkgrey;\n  fill-opacity: 1;\n  stroke: darkgrey;\n  stroke-opacity: 0.3;\n\n  .axisName {\n    fill: black;\n    font-weight: bold;\n    text-anchor: middle;\n  }\n\n  .domain {\n    fill: none;\n    stroke: black;\n    stroke-opacity: 0.8;\n  }\n'], ['\n  shape-rendering: crispEdges;\n  fill: darkgrey;\n  fill-opacity: 1;\n  stroke: darkgrey;\n  stroke-opacity: 0.3;\n\n  .axisName {\n    fill: black;\n    font-weight: bold;\n    text-anchor: middle;\n  }\n\n  .domain {\n    fill: none;\n    stroke: black;\n    stroke-opacity: 0.8;\n  }\n']);

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFauxDom = require('react-faux-dom');

var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _d3Axis = require('d3-axis');

var _d3Selection = require('d3-selection');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          height = _props.height,
          width = _props.width,
          xScale = _props.xScale,
          tickAmount = _props.tickAmount,
          tickArguments = _props.tickArguments,
          tickFormat = _props.tickFormat,
          tickSize = _props.tickSize,
          tickSizeInner = _props.tickSizeInner,
          tickSizeOuter = _props.tickSizeOuter,
          tickOffset = _props.tickOffset,
          axisName = _props.axisName,
          axisNameOffset = _props.axisNameOffset;

      var transform = 'translate(0,' + height + ')';

      var axis = (0, _d3Axis.axisBottom)(xScale).tickArguments(tickArguments).ticks(tickArguments ? null : tickAmount).tickFormat(tickFormat).tickSize(tickSize).tickSizeInner(tickSize ? null : tickSizeInner).tickSizeOuter(tickSize ? null : tickSizeOuter).tickPadding(tickOffset);

      var axisGroup = _reactFauxDom2.default.createElement('g');
      axisGroup.setAttribute('class', 'xaxis-' + className);
      axisGroup.setAttribute('transform', transform);

      var label = _reactFauxDom2.default.createElement('text');
      label.setAttribute('class', 'axisName');
      label.setAttribute('transform', 'translate(' + width / 2 + ', ' + axisNameOffset + ')');
      label.innerHTML = axisName;
      axisGroup.appendChild(label);

      var axisDom = (0, _d3Selection.select)(axisGroup).call(axis);
      return axisDom.node().toReact();
    }
  }]);

  return Component;
}(_react.PureComponent);

Component.propTypes = {
  className: _propTypes2.default.string.isRequired,
  xScale: _propTypes2.default.func.isRequired,
  height: _propTypes2.default.number.isRequired,
  width: _propTypes2.default.number.isRequired,
  tickAmount: _propTypes2.default.number,
  tickArguments: _propTypes2.default.array,
  tickFormat: _propTypes2.default.func,
  tickSize: _propTypes2.default.number,
  tickSizeInner: _propTypes2.default.number,
  tickSizeOuter: _propTypes2.default.number,
  tickOffset: _propTypes2.default.number,
  axisName: _propTypes2.default.string,
  axisNameOffset: _propTypes2.default.number
};
Component.defaultProps = {
  tickAmount: null,
  tickArguments: null,
  tickFormat: null,
  tickSize: 0,
  tickSizeInner: 0,
  tickSizeOuter: 0,
  tickOffset: 8,
  axisNameOffset: 30
};
exports.default = (0, _styledComponents2.default)(Component)(_templateObject);