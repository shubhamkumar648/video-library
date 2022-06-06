import axios from "axios";

export const AddtoLike = async(video, videoactionDispatch) => {
    try {
      const response = await axios.post(
        "/api/user/likes",
        {video },

        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      videoactionDispatch({ type: "LIKE_VIDEO", payload: response.data.likes });
       console.log(response);

    } catch (error) {
      console.log(error);
    }
  };