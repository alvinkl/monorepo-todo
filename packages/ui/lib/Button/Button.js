"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = props => _react.default.createElement("button", props, "Touch me please!");

exports.Button = Button;
var _default = Button;
exports.default = _default;