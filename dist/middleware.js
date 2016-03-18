'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

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


            if (!_lodash2.default.isObject(storage)) {
                return next(action);
            }

            _lodash2.default.forEach(storage, function (value, key) {
                return _store2.default.set(key, value);
            });

            return next(action);
        };
    };
};