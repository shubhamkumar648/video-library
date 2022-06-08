import React from "react";
import "./singlevideocard.css";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { useVideoAction } from "../../context/Videoaction-context";
import { useVideo } from "../../context/Videocontext";
import { isVideoinPlaylist } from "../../utils/isVideoinPlaylist";
import {
  AddtoLike,
  addTowatchlater,
  RemovefromLikes,
  RemoveFromwatchlater,
} from "../../service";

export const SingleVideocard = ({ singleVideo }) => {
  const { _id, title, views, avatar, description, creatorName } = singleVideo;

  const { videoactionState, videoactionDispatch } = useVideoAction();
  const { liked, watchLater } = videoactionState;
  const { state } = useVideo();
  const { videos } = state;

  const likeVideo = isVideoinPlaylist(liked, _id);

  const watchLaterVideo = isVideoinPlaylist(watchLater,_id);

  const LikeHandler = () => {
    if (likeVideo) {
      RemovefromLikes(_id, videoactionDispatch);
    } else {
      AddtoLike(videos, videoactionDispatch);
    }
  };

  const WatchLaterHandler = () => {
    if (watchLaterVideo) {
      RemoveFromwatchlater(_id, videoactionDispatch);
    } else {
      addTowatchlater(videos, videoactionDispatch);
    }
  };

  return (
    <div className="singlePagevideo-card flex mt-2">
      <iframe 
        src={`https://www.youtube.com/embed/${_id}`}
        title="youtube player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="singlecard-Allcontent">

        <h5 className="font-xxl "> {title}</h5>

        {/* <p className="font-xxl ">{views} views</p> */}

        <div className="card-content flex">
           <div className="content-avatar-container"> 
              <img src={avatar} alt="avatar" className='avatar-dimension'/>
            </div>
            <div className="content-discription mt-1 ml-1 ">
              {/* <h6 className="font-l fs-md ">{title} </h6> */}
              <span className="light">{creatorName}</span>
              <strong className="light">{views} views </strong>
            </div>
          {/* </div> */}

        <div className="icon flex">
          {likeVideo ? (
            <span onClick={LikeHandler}>
              <AiFillLike className="mr-1" /> UnLike
            </span>
          ) : (
            <span onClick={LikeHandler}>
              <AiOutlineLike  className="mr-1"/>
              Like
            </span>
          )}

          <span>
            {" "}
            <BsCollectionPlay className="mr-1" />
            Save to Playlist
          </span>

          {watchLaterVideo ? (
            <span onClick={WatchLaterHandler}>
              <MdWatchLater className="mr-1"/>
              Watchlater
            </span>
          ) : (
            <span onClick={WatchLaterHandler}>
              <MdOutlineWatchLater className="mr-1" />
              Watchlater
            </span>
          )}
        </div>
        </div>
        <hr />
        {/* <div className="card-discription flex">
        <div className="avatar">
            <img src={avatar} alt="avatar" className="avatar-dimension" />
          </div>
          <div className="card-content ml-1">
            <h6 className="pt-1">{creatorName}</h6>
          </div>
        </div> */}
        <p>{description} </p>

      </div>
    </div>
  );
};
