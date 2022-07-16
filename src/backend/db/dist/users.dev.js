"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.users = void 0;

var _uuid = require("uuid");

var _authUtils = require("../utils/authUtils");

/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have likes (Likes are set to 0 by default), History Array, Playlists Array (added Watch Later Playlist in it by default) by default
 * */
var users = [// {
//   _id: uuid(),
//   firstName: "Adarsh",
//   lastName: "Balika",
//   email: "adarshbalika@gmail.com",
//   password: "adarshBalika123",
//   createdAt: formatDate(),
//   updatedAt: formatDate()
// },
{
  _id: (0, _uuid.v4)(),
  firstName: "Shubham",
  lastName: "Kumar",
  email: "shubhamkumar@gmail.com",
  password: "shubhamkumar123",
  createdAt: (0, _authUtils.formatDate)(),
  updatedAt: (0, _authUtils.formatDate)()
}];
exports.users = users;