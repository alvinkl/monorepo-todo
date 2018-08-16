"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it("renders button", () => {
  const div = document.createElement("div");

  _reactDom.default.render(_react.default.createElement(_Button.default, null), div);

  _reactDom.default.unmountComponentAtNode(div);
});