import React from "react";
import "./singlevideocard.css";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { useVideoAction } from "../../context/Videoaction-context";
import { isVideoinPlaylist } from "../../utils/isVideoinPlaylist";
import {
  AddtoLike,
  addTowatchlater,
  RemovefromLikes,
  RemoveFromwatchlater,
} from "../../service";
import { Playlistmodel } from "../playlistModel/Playlistmodel";
import { useState } from "react";

export const SingleVideocard = ({ singleVideo }) => {
  const { _id, title, views, avatar, description, creatorName } = singleVideo;

  const { videoactionState, videoactionDispatch } = useVideoAction();
  const { liked, watchLater } = videoactionState;
  const likeVideo = isVideoinPlaylist(liked, _id);
  const watchLaterVideo = isVideoinPlaylist(watchLater, _id);

  const [modelDisplay, setModelDisplay] = useState(false);

  const LikeHandler = () => {

    if (likeVideo) {
      RemovefromLikes(_id, videoactionDispatch);
    } else {
      AddtoLike(singleVideo, videoactionDispatch);
    }
  };

  const WatchLaterHandler = () => {
    if (watchLaterVideo) {
      RemoveFromwatchlater(_id, videoactionDispatch);
    } else {
      addTowatchlater(singleVideo, videoactionDispatch);
    }
  };

  const plalistHandler = () => {
    setModelDisplay((prev) => !prev);
  };

  return (
    <div className="singlePagevideo-card flex mt-2 p-1">
      <iframe
        src={`https://www.youtube.com/embed/${_id}`}
        title="youtube player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="singlecard-Allcontent">
        <h5 className="font-xxl txt-l"> {title}</h5>

        <div className="card-content flex">
          <div className="content-avatar-container">
            <img src={avatar} alt="avatar" className="avatar-dimension" />
          </div>
          <div className="content-discription mt-1 ml-1 ">
            <span className="light">{creatorName}</span>
            <strong className="light">{views} views </strong>
          </div>

          <div className="icon flex">
            {likeVideo ? (
              <span onClick={LikeHandler}>
                <AiFillLike className="mr-1" /> UnLike
              </span>
            ) : (
              <span onClick={LikeHandler}>
                <AiOutlineLike className="mr-1" />
                Like
              </span>
            )}

            <span onClick={plalistHandler}>
              {" "}
              <BsCollectionPlay className="mr-1" />
              Save to Playlist
            </span>

            {watchLaterVideo ? (
              <span onClick={WatchLaterHandler}>
                <MdWatchLater className="mr-1" />
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

        <p className="mb-1 txt-l">{description} </p>
        {modelDisplay && <Playlistmodel video={singleVideo}  setModelDisplay = {setModelDisplay} />}
      </div>
    </div>
  );
};
