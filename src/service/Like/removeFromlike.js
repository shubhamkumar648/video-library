import axios from "axios";

  export const RemovefromLikes = async (Id, videoactionDispatch) => {
    
    try {
      const response = await axios.delete(
        `/api/user/likes/${Id}`,

        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );

      videoactionDispatch({
        type: "DISLIKE_VIDEO",
        payload: response.data.likes,
      });
    } catch (error) {
      console.log(error.response);
    }
  };