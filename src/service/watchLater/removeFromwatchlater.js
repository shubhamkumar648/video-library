
import axios from "axios";

export const RemoveFromwatchlater = async (Id,videoactionDispatch) => {
  try {
    const response = await axios.delete(
      `/api/user/watchlater/${Id}`,

      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );

    videoactionDispatch({
      type: "WATCH_LATER",
      payload: response.data.watchlater,
    });
    
  } catch (error) {
    console.log(error.response);
  }
};
