import React from "react";
import { useParams } from "react-router-dom";
import { Sidebar, VideoCard } from "../../component";
import { useVideoAction } from "../../context/Videoaction-context";
import { getPlaylistVideo } from "../../utils/getPlaylistVideo";

export const PlaylistVideoPage = () => {
  const { Id } = useParams();
  const { videoactionState } = useVideoAction();
     console.log(videoactionState);
   const {playlists }= videoactionState;

  const playlistVideos = getPlaylistVideo(playlists, Id) ?? {};

  const { title, videos } = playlistVideos;

     
  return (
    <div className="main-container">
      <Sidebar />

      <article className="videoList-container like-VideoCard">
        <p>{title}</p>
        <>
          {!videos ? (
            <div>
              <p>You dont't have video list add some </p>
            </div>
          ) : (
            <div>
              { videos?.map((item) => (
                <VideoCard key={item._id} video={item} />
              )) }
            </div>
          )}
        </>
      </article>
    </div>
  );
};
