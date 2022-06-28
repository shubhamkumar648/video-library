import React from "react";
import { useReducer, useContext, createContext } from "react";
import { videoActionFuntion } from "../reducer/Videoaction";

const Videoactioncontext = createContext();

export const VideoactionProvider = ({ children }) => {
  const initialState = {
    liked: [],
    watchLater: [],
    history: [],
    playlists: [],
  };

  const [videoactionState, videoactionDispatch] = useReducer(
    videoActionFuntion,
    initialState
  );

  return (
    <Videoactioncontext.Provider
      value={{ videoactionState, videoactionDispatch }}
    >
      {children}
    </Videoactioncontext.Provider>
  );
};

export const useVideoAction = () => useContext(Videoactioncontext);
