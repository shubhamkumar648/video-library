"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categories = void 0;

var _uuid = require("uuid");

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */
var categories = [{
  _id: (0, _uuid.v4)(),
  categoryName: "All",
  categoryImage: "https://res.cloudinary.com/e-comerce/image/upload/v1659122703/all_vlptbl.jpg"
}, {
  _id: (0, _uuid.v4)(),
  categoryName: "podcast",
  categoryImage: "https://res.cloudinary.com/e-comerce/image/upload/v1653632870/podcast_wpgoik.jpg"
}, {
  _id: (0, _uuid.v4)(),
  categoryName: "music",
  categoryImage: "https://res.cloudinary.com/e-comerce/image/upload/v1653634073/music_llmfei.jpg"
}, {
  _id: (0, _uuid.v4)(),
  categoryName: "sports",
  categoryImage: "https://res.cloudinary.com/e-comerce/image/upload/v1653634065/sports2_dhdwzj.jpg"
}, {
  _id: (0, _uuid.v4)(),
  categoryName: "fun",
  categoryImage: "https://res.cloudinary.com/e-comerce/image/upload/v1653634924/fun-at-work_jjqsco.png"
}];
exports.categories = categories;