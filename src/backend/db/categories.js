import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [

  {
    _id: uuid(),
    categoryName: "All",
  },
  
  {
    _id: uuid(),
    categoryName: "podcast",

  },
    
  {
    _id: uuid(),
    categoryName: "music",
    
  },
  {
    _id: uuid(),
    categoryName: "sports",
    
  },
  {
    _id: uuid(),
    categoryName: "fun",

    },
];
