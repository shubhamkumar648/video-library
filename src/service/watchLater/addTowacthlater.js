import axios from "axios";

export const addTowatchlater = async (video,videoactionDispatch) => {

  try {
    const response = await axios.post(
      `/api/user/watchlater`,

      { video },
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );
    console.log(response);
    videoactionDispatch({ type: "WATCH_LATER", payload: response.data.watchlater });

  } 
  catch (error) {
    console.log(error.response);
  }
};

