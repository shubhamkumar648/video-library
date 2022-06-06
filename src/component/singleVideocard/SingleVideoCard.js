import React from "react";
import "./singlevideocard.css";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { useVideoAction } from "../../context/Videoaction-context";
import { useVideo } from "../../context/Videocontext";
import { isVideoinPlaylist } from "../../utils/isVideoinPlaylist";
import { RemovefromLikes } from "../../service/Like/removeFromlike";
import { AddtoLike } from "../../service/Like/addtoLike";


export const SingleVideocard = ({ singleVideo }) => {
  const { _id, title, views, avatar, description, creatorName } = singleVideo;

  const { videoactionState, videoactionDispatch } = useVideoAction();
  const { liked } = videoactionState;
  const { state } = useVideo();
  const { videos } = state;

  const likeVideo = isVideoinPlaylist(liked, _id);

  const LikeHandler = () => {
    if (likeVideo) {
      RemovefromLikes(_id, videoactionDispatch);
    } else {
      AddtoLike(videos, videoactionDispatch);
    }
  };

   
  

  return (
    <div className="singlePagevideo-card flex">
      <iframe
        src={`https://www.youtube.com/embed/${_id}`}
        title="youtube player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="singlecard-Allcontent">
        <p> {title}</p>
        <p>{views}</p>

        <div className="icon flex">
          {likeVideo ? (
            <span  onClick={LikeHandler}>
              <AiFillLike /> UnLike
            </span>
          ) : (
            <span  onClick={LikeHandler}>
              <AiOutlineLike />
              Like
            </span>
          )}

          <span>
            {" "}
            <BsCollectionPlay />
            Save to Playlist
          </span>

          <span >
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
