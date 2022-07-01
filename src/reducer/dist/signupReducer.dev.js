"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signupReducer = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var signupReducer = function signupReducer(state, action) {
  switch (action.type) {
    case "FIRST_NAME":
      return _objectSpread({}, state, {
        firstName: action.payload
      });

    case "LAST_NAME":
      return _objectSpread({}, state, {
        lastName: action.payload
      });

    case "EMAIL":
      return _objectSpread({}, state, {
        email: action.payload
      });

    case "PASSWORD":
      return _objectSpread({}, state, {
        password: action.payload
      });

    default:
      return state;
  }
};

exports.signupReducer = signupReducer;