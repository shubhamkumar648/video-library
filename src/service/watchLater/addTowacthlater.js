import axios from "axios";

export const addTowatchlater = async (video,videoactionDispatch) => {
  try {
    const response = await axios.post(
      `/api/user/watchlater`,

      { video },
      {
        headers: {authorization: loclStoraage.getItem("token") },
      }
    );

    videoactionDispatch({ type: "WATCH_LATER", payload: response.data.watchlater });
    console.log(response);

  } 
  catch (error) {
    console.log(error);
  }
};
