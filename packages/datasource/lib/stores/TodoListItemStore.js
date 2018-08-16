"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TodoListItemStore = void 0;

var _mobx = require("mobx");

var _class, _descriptor, _descriptor2, _descriptor3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

let TodoListItemStore = (_class = class TodoListItemStore {
  constructor(text, id = new Date().getTime(), isCompleted = false) {
    _defineProperty(this, "id", _initializerWarningHelper(_descriptor, this));

    _defineProperty(this, "text", _initializerWarningHelper(_descriptor2, this));

    _defineProperty(this, "isCompleted", _initializerWarningHelper(_descriptor3, this));

    this.id = id;
    this.text = text;
    this.isCompleted = isCompleted;
  }

  static init(json) {
    return new TodoListItemStore(json["text"], json["id"], json['isCompleted']);
  }

  setCompleteness(completed) {
    this.isCompleted = completed;
  }

  get current() {
    return {
      id: this.id,
      text: this.text,
      isCompleted: this.isCompleted
    };
  }

}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "id", [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "text", [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "isCompleted", [_mobx.observable], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "setCompleteness", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setCompleteness"), _class.prototype)), _class);
exports.TodoListItemStore = TodoListItemStore;
var _default = {
  TodoListItemStore
};
exports.default = _default;