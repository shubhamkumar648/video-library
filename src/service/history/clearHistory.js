import axios from "axios";

export const ClearAllHistory = async (videoactionDispatch) => {
  try {
    const response = await axios.delete(
      '/api/user/history/all',

      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );

    videoactionDispatch({ type: "HISTORY", payload: response.data.history });
  } 
  catch (error) {
    console.log(error.response);
  }
};
