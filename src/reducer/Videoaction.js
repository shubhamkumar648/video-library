export const videoActionFuntion = (state, action) => {
  switch (action.type) {
    case "LIKE_VIDEO": {
      return { ...state, liked: action.payload };
    }

    case "DISLIKE_VIDEO": {
      return { ...state, liked: action.payload };
    }

    case "WATCH_LATER": {
      return { ...state, watchLater: action.payload };
    }

    case "HISTORY": {

      return {...state ,history: action.payload}
    }
  }
};
