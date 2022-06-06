import React from "react";
import { VideoCard } from "../../component";
import { useVideoAction } from "../../context/Videoaction-context";

export const LikevideoPage = () => {
  const { videoactionState } = useVideoAction();

  const { liked } = videoactionState;

  return (
    <>
      {!liked.length ? (
        <div>do not have any likevideo</div>
      ) : (
        <div>
          {liked.map((item) => {
            return (
              <div>
                <VideoCard video={item} key={item._id} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
