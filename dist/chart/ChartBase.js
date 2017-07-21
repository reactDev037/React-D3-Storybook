'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  padding: ', 'px;\n\n  > rect.background {\n    fill: #e9e9eb;\n    fill-opacity: 0.4;\n  }\n'], ['\n  display: block;\n  padding: ', 'px;\n\n  > rect.background {\n    fill: #e9e9eb;\n    fill-opacity: 0.4;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Construct a Chart wrapper
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
          transform = _props.transform,
          children = _props.children;

      return _react2.default.createElement(
        'svg',
        { className: className, width: width, height: height, transform: transform },
        _react2.default.createElement('rect', _extends({ className: 'background' }, { width: width, height: height })),
        children
      );
    }
  }]);

  return Component;
}(_react.PureComponent);

// TODO: update the styled approach to make it more readable


Component.propTypes = {
  className: _propTypes2.default.string,
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  transform: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};
Component.defaultProps = {
  children: null,
  transform: null
};
exports.default = (0, _styledComponents2.default)(Component)(_templateObject, function (prop) {
  return prop.padding || 60;
});