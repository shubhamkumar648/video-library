import React from "react";
import { Sidebar, VideoCard } from "../../component";
import { useVideoAction } from "../../context/Videoaction-context";

export const LikevideoPage = () => {
  const { videoactionState } = useVideoAction();

  const { liked } = videoactionState;
      
  return (

    <div className="main-container">
    <Sidebar/>
    <article className="videoList-container like-VideoCard">

      {!liked.length ? (
        <div className="font-xl">Do not have any like video go to to explore </div>
      ) : (
          <>
          {liked.map((item) => {
            return (
                <VideoCard video={item} key={item._id} />
            );
          })}
          </>
      )}
      </article>

    </div>
  );
};        
