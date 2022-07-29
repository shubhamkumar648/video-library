import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [

  {
    _id: uuid(),
    categoryName: "All",
    categoryImage: "https://res.cloudinary.com/e-comerce/image/upload/v1659122703/all_vlptbl.jpg"
  },
  
  {
    _id: uuid(),
    categoryName: "podcast",
    categoryImage: "https://res.cloudinary.com/e-comerce/image/upload/v1653632870/podcast_wpgoik.jpg",

  },
    
  {
    _id: uuid(),
    categoryName: "music",
    categoryImage:"https://res.cloudinary.com/e-comerce/image/upload/v1653634073/music_llmfei.jpg"
    
  },
  {
    _id: uuid(),
    categoryName: "sports",
    categoryImage:"https://res.cloudinary.com/e-comerce/image/upload/v1653634065/sports2_dhdwzj.jpg"
    
  },
  {
    _id: uuid(),
    categoryName: "fun",
    categoryImage:"https://res.cloudinary.com/e-comerce/image/upload/v1653634924/fun-at-work_jjqsco.png"

    },
];
