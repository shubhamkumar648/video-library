"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddtoLike = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AddtoLike = function AddtoLike(video, videoactionDispatch) {
  var response;
  return regeneratorRuntime.async(function AddtoLike$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post("/api/user/likes", {
            video: video
          }, {
            headers: {
              authorization: localStorage.getItem("token")
            }
          }));

        case 3:
          response = _context.sent;
          videoactionDispatch({
            type: "LIKE_VIDEO",
            payload: response.data.likes
          });
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0.response);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.AddtoLike = AddtoLike;