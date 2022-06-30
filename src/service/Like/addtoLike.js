import axios from "axios";

export const AddtoLike = async(video, videoactionDispatch) => {
   
  console.log(video)

    try {
      const response = await axios.post(
        "/api/user/likes",
        {video },

        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      videoactionDispatch({ type: "LIKE_VIDEO", payload: response.data.likes });

    } catch (error) {
      console.log(error.response);
    }
  };