export const ReducerFun = (state, action) => {
  
  switch (action.type) {
    case "SET_VIDEOS": {
      return {...state, videos: action.payload };
    }

    case "SET_CATEGORIES": {
      return { ...state, categories: action.payload };
    }

    case "FILTER_CATEGORIES": {
      return { ...state, selectedCategory: action.payload };
    }


    
    default: {
      throw new Error("Action type not found");
    }
  }
};
