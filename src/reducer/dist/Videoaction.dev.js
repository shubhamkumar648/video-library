"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoActionFuntion = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var videoActionFuntion = function videoActionFuntion(state, action) {
  switch (action.type) {
    case "LIKE_VIDEO":
      {
        return _objectSpread({}, state, {
          liked: action.payload
        });
      }

    case "DISLIKE_VIDEO":
      {
        return _objectSpread({}, state, {
          liked: action.payload
        });
      }

    case "WATCH_LATER":
      {
        return _objectSpread({}, state, {
          watchLater: action.payload
        });
      }

    case "HISTORY":
      {
        return _objectSpread({}, state, {
          history: action.payload
        });
      }

    case "ADD_TO_PLAYLIST":
      {
        console.log(action.payload);
        return _objectSpread({}, state, {
          playlists: action.payload
        });
      }

    case "UPDATED_PLAYLIST":
      {
        return _objectSpread({}, state, {
          playlists: state.playlists.map(function (playlist) {
            return playlist._id === action.payload._id ? _objectSpread({}, action.payload) : _objectSpread({}, playlist);
          })
        });
      }

    case "REMOVE_FROM_PLAYLIST":
      {
        return _objectSpread({}, state, {
          playlists: state.playlists.map(function (playlist) {
            return playlist._id === action.payload._id ? _objectSpread({}, action.payload) : _objectSpread({}, playlist);
          })
        });
      }

    case "DELETE_PLAYLIST":
      return _objectSpread({}, state, {
        playlists: action.payload
      });
  }
};

exports.videoActionFuntion = videoActionFuntion;