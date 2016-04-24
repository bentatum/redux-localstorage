'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _store = require('store2');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var dispatch = _ref.dispatch;
  var getState = _ref.getState;
  return function (next) {
    return function (action) {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      var storage = action.storage;


      if (!storage || (typeof storage === 'undefined' ? 'undefined' : _typeof(storage)) !== 'object') {
        return next(action);
      }

      for (var prop in storage) {
        if (storage.hasOwnProperty(prop)) {
          _store2.default.set(prop, storage[prop]);
        }
      }

      return next(action);
    };
  };
};