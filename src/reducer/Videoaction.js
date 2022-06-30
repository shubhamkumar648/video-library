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
      return { ...state, history: action.payload };
    }

    case "ADD_TO_PLAYLIST": {
      console.log(action.payload);

      return { ...state, playlists: action.payload };
    }

    case "UPDATED_PLAYLIST": {
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === action.payload._id
            ? { ...action.payload }
            : { ...playlist }
        )
      };
    }

    case "REMOVE_FROM_PLAYLIST": {
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === action.payload._id
            ? { ...action.payload }
            : { ...playlist }
        )
      };
    }

    case "DELETE_PLAYLIST":
      return { ...state, playlists: action.payload };
  }
};
