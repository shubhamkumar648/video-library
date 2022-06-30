import React from "react";
import { useVideoAction } from "../../context/Videoaction-context";
import { VideoCard,Sidebar} from "../../component";

export const WatchlaterPage = () => {
  const { videoactionState } = useVideoAction();

  const { watchLater } = videoactionState;

  return (
    <div className="main-container">
    <Sidebar/>
    <article className="videoList-container like-VideoCard">

      {!watchLater.length ? (
        <span className="font-xl "> Do not have any save  video go to to explore page  </span>
      ) : (
          <>
          {watchLater.map((item) => {
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
