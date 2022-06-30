import React from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { Sidebar, VideoCard } from "../../component";
import { useVideoAction } from "../../context/Videoaction-context";
import { getPlaylistVideo } from "../../utils/getPlaylistVideo";
import "./playlistvideopage.css";

export const PlaylistVideoPage = () => {
  const { Id } = useParams();
  const { videoactionState, videoactionDispatch } = useVideoAction();
  const { playlists } = videoactionState;

  const playlistVideos = getPlaylistVideo(playlists, Id) ?? {};

  const { title, videos } = playlistVideos;

  const deleteHandler = async (VideoId) => {
    try {
      const response = await axios.delete(`/api/user/playlists/${VideoId}`, {
        headers: { authorization: localStorage.getItem("token") }
      });
      videoactionDispatch({
        type: "DELETE_PLAYLIST",
        payload: response.data.playlists
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="main-container">
      <Sidebar />

      <article className="videoList-container">
        <div className="playlist-video-container flex flex-col">
          <div className="flex header-container">
            <h4>{title}</h4>
            <button className="btn" onClick={() => deleteHandler(Id)}>
              Delete
            </button>
          </div>

          <>
            {!videos ? (
              <div>
                <p>You dont't have video list add some </p>
              </div>
            ) : (
              <div>
                {videos?.map((item) => (
                  <VideoCard key={item._id} video={item} />
                ))}
              </div>
            )}
          </>
        </div>
      </article>
    </div>
  );
};
