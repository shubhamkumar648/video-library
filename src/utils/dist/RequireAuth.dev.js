"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequireAuth = void 0;

var _Authcontext = require("../context/Authcontext");

var _useAuth = (0, _Authcontext.useAuth)(),
    user = _useAuth.user;

var RequireAuth = function RequireAuth() {
  return;
};

exports.RequireAuth = RequireAuth;