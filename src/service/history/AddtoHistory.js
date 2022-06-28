import axios from "axios";

export const AddtoHistory = async(video, videoactionDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/history",
      { video },

      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );

    videoactionDispatch({ type: "HISTORY", payload: response.data.history });
         console.log(response);
  } 
  catch (error) {
    console.log(error);
  }
};
