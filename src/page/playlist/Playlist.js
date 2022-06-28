import React from "react";
import { Link } from "react-router-dom";
import { useVideoAction } from "../../context/Videoaction-context";

import "./playlist.css";

export const Playlist = () => {
  const { videoactionState, videoactionDispatch } = useVideoAction();

  const { playlists } = videoactionState;

  return (
    <>
      {!playlists.length ? (
        <div>
          <p>you dont have any playlist! create Playlist</p>
        </div>
      ) : (
        <div className="playlist-container">
          {playlists.map(({ title, _id }) => {
            return (
              <Link to={`/playlist/${_id}`} className="link__nostyle" key={_id}>
                <h5>{title}</h5>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
