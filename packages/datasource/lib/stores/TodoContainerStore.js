"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoContainerStore = void 0;

var _mobx = require("mobx");

var _class, _descriptor;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

let TodoContainerStore = (_class = class TodoContainerStore {
  constructor(service) {
    _defineProperty(this, "items", _initializerWarningHelper(_descriptor, this));

    _defineProperty(this, "service", void 0);

    this.service = service;
  }

}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "items", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class);
exports.TodoContainerStore = TodoContainerStore;