import React from "react";
import { Link } from "react-router-dom";
import { useVideoAction } from "../../context/Videoaction-context";
import { AddtoHistory } from "../../service";

export const VideoCard = ({ video }) => {
  const {_id, thumbnail, duration, title, avatar, alt, creatorName, views } =
    video;

    const {videoactionDispatch} = useVideoAction()
    
    const HistoryHandler = () => {
    
      AddtoHistory(video,videoactionDispatch )
    }
  return (
    <div className="videocard flex flex-col">
      <Link
        to={`/videolist/${_id}`}
        className="link__nostyle"
        onClick={HistoryHandler}
      >
        <img
          src={thumbnail}
          alt="card img"
          className="img-responsive card-dimension"
        />
      </Link>

      <span className="duration flex">{duration}</span>
      <div className="card-content flex">
        <div className="content-avatar-container">
          <img src={avatar} alt="avatar" className="avatar-dimension" />
        </div>
        <div className="content-discription ">
          <h6 className="font-l fs-md ">{title} </h6>
          <span className="light">{creatorName}</span>
          <strong className="light">{views} views </strong>
        </div>
      </div>
    </div>
  );
};
