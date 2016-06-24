'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Container = require('../components/Container');

var _constants = require('../utils/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.app = _reactDom2.default.render(_react2.default.createElement(_Container.Container, null), document.getElementById('content'));