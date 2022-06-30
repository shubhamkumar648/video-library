import React from "react";
import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { ReducerFun } from "../reducer/ReducerFun";
import axios from "axios";

const Videocontext = createContext();

export const VideoProvider = ({ children }) => {
  const initialState = {
    videos: [],
    categories: [],
    selectedCategory: "All",
  };

  const [state, dispatch] = useReducer(ReducerFun, initialState);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        setLoading(false);
        dispatch({ type: "SET_VIDEOS", payload: response.data.videos });
      } catch (error) {
        console.log(error.response);
        setError(true);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setLoading(false);

        dispatch({ type: "SET_CATEGORIES", payload: response.data.categories });
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, []);

  return (
    <Videocontext.Provider value={{ state, dispatch, error }}>
      {children}
    </Videocontext.Provider>
  );
};

const useVideo = () => useContext(Videocontext);

export { useVideo };
