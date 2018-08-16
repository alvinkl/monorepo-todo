"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TodoContainerStore = void 0;

var _mobx = require("mobx");

var _class, _descriptor;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

let TodoContainerStore = (_class = class TodoContainerStore {
  constructor(service) {
    _initializerDefineProperty(this, "items", _descriptor, this);

    this.service = void 0;
    this.service = service;
  }

  get activeItems() {
    return this.items.filter(object => !object.isCompleted).sort((__dirname, secondObject) => secondObject.id);
  }

  get completedItems() {
    return this.items.filter(object => object.isCompleted).sort((_, obj) => obj.id);
  }

  addItem(item) {
    this.service.addTodo(item);
    this.items.push(item);
  }

  saveItems() {
    this.service.saveTodos(this.items);
  }

  loadItems() {
    this.items = this.service.getTodos();
  }

}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "items", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, "activeItems", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "activeItems"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "completedItems", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "completedItems"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addItem", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "addItem"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "saveItems", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "saveItems"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "loadItems", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "loadItems"), _class.prototype)), _class);
exports.TodoContainerStore = TodoContainerStore;
var _default = TodoContainerStore;
exports.default = _default;