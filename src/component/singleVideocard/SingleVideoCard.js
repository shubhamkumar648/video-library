import React from "react";
import "./singlevideocard.css";
import { AiOutlineLike,AiFillLike } from "react-icons/ai";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { useEffect } from "react";
import axios from "axios";
import { useVideoAction } from "../../context/Videoaction-context";
import { useState } from "react";
import { useVideo } from "../../context/Videocontext";
import { isVideoinPlaylist } from "../../utils/isVideoinPlaylist";



export const SingleVideocard = ({ singleVideo }) => {
  // const [video, setVideo] = useState([]);

  const { _id, title, views, avatar, description, creatorName } = singleVideo;

  const { videoactionState, videoactionDispatch } = useVideoAction();
  const {liked} = videoactionState
   const {state} = useVideo()
     const {videos} = state

   const likeVideo =  isVideoinPlaylist(liked,_id)


   const AddtoLike = async(videos, videoactionDispatch) => {
    
    try {

      const response = await axios.post(
        "/api/user/likes",
        {video: videos},

        {
          headers: {authorization: localStorage.getItem("token") },
        }
      );

      console.log(response);
      videoactionDispatch({type:"LIKE_VIDEO", payload:response.data.likes});

    } 
    catch (error) {
      console.log(error);
    }
  }

   
  const RemovefromLikes = async(Id, videoactionDispatch) => {
    
    try {

      const response = await axios.delete(
        `/api/user/likes/${Id}`,
        {video: videos},

        {
          headers: {authorization: localStorage.getItem("token") },
        }
      );

      videoactionDispatch({type:"DISLIKE_VIDEO", payload:response.data.likes});
      console.log(response);

    } 
    catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {

  //   (async () => {
  //     try {

  //       const response = await axios.post(
  //         "/api/user/likes",
  //         {video: videos},

  //         {
  //           headers: {authorization: localStorage.getItem("token") },
  //         }
  //       );

  //       console.log(response);
  //       videoactionDispatch({type:"LIKE_VIDEO", payload:response.data.likes});

  //     } 
  //     catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);



const LikeHandler = () => {

  if(likeVideo) {

     RemovefromLikes(_id,videoactionDispatch)
  }

  else {

    AddtoLike(videos,videoactionDispatch)
  }
}

  return (
    <div className="singlePagevideo-card flex">
      <iframe
        src={`https://www.youtube.com/embed/${_id}`}
        title="youtube player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* <img src = "https://res.cloudinary.com/e-comerce/image/upload/v1653985916/para_epaeqg.webp" className='img-responsive card-img-dimension'/> */}

      <div className="singlecard-Allcontent">
        <p> {title}</p>
        <p>{views}</p>

        <div className="icon flex">
        {likeVideo ? 
          <span>
            <AiFillLike onClick={LikeHandler}/> UnLike
          </span>
         :
         <span>
            <AiOutlineLike onClick={LikeHandler}/>Like
          </span>
        }

          <span>
            {" "}
            <BsCollectionPlay />
            Save to Playlist
          </span>
          <span>
            <MdOutlineWatchLater />
            Watchlater
          </span>
        </div>
        <hr />
        <div className="card-discription flex">
          <div className="avatar">
            <img src={avatar} alt="avatar" className="avatar-dimension" />
          </div>
          <div className="card-content ml-1">
            <h6 className="pt-1">{creatorName}</h6>
            <h6>{description} </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
