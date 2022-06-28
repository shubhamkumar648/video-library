import React from "react";
import { VideoCard, Sidebar } from "../../component";
import { useVideoAction } from "../../context/Videoaction-context";
import { ClearAllHistory } from "../../service";

export const HistoryPage = () => {
  const { videoactionState, videoactionDispatch } = useVideoAction();

  const { history } = videoactionState;

  const clearAllhistoryHandler = () => {
    ClearAllHistory(videoactionDispatch);
  };

  return (
    <>
      <div className="main-container">
        <Sidebar />

        <article className="videoList-container like-VideoCard">
          <div className="clear-all-history flex-center flex">
            <button
              className="btn  btn__primary_outline"
              onClick={clearAllhistoryHandler}
            >
              {" "}
              clear all
            </button>
          </div>

          {!history.length ? (
            <span className="font-xl"> here show the history of video </span>
          ) : (
            <>
              {history.map((item) => {
                return <VideoCard video={item} key={item._id} />;
              })}
            </>
          )}
        </article>
      </div>
    </>
  );
};
