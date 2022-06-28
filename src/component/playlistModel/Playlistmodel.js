import axios from "axios";
import React from "react";
import { useState } from "react";
import { useVideoAction } from "../../context/Videoaction-context";
import { playlistId } from "../../utils/playlistId";
import "./Playlistmodel.css";

export const Playlistmodel = ({ video, setModelDisplay }) => {
  const [createPlaylist, setcreatePlaylist] = useState(false);

  const { videoactionState, videoactionDispatch } = useVideoAction();
  const { playlists } = videoactionState;

  const [displayPlaylist, setdisplayList] = useState("");

  const createHandler = () => {
    setcreatePlaylist((prev) => !prev);
  };

  const createNewPlaylistHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/api/user/playlists",

        {
          playlist: { title: displayPlaylist.trim() },
        },

        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );

      videoactionDispatch({
        type: "ADD_TO_PLAYLIST",
        payload: response.data.playlists,
      });

      console.log(response);
      setdisplayList(" ");
    } catch (error) {
      console.log(error);
    }
  };

  const playListHandler = async (e, playlistId, videoId) => {
    if (e.target.checked) {
      try {
        const response = await axios.post(
          `/api/user/playlists/${playlistId}`,

          { video },

          {
            headers: { authorization: localStorage.getItem("token") },
          }
        );

        console.log(response);
        videoactionDispatch({
          type: "UPDATED_PLAYLIST",
          payload: response.data.playlist,
        });
      } catch (error) {
        console.log(error.response);
      }
    } else {
      try {
        const response = await axios.delete(
          `/api/user/playlists/${playlistId}/${videoId}`,
          {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          }
        );

        videoactionDispatch({
          type: "REMOVE_FROM_PLAYLIST",
          payload: response.data.playlist,
        });

        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  return (
    <div className="Playlist">
      <div className="Playlistmodel">
        <span className="create-playlist-container" onClick={createHandler}>
          {" "}
          Add to playlist
        </span>
      </div>

      {createPlaylist && (
        <div className="createPlaylist-content">
          <div className="createPlaylist-input flex-col">
            <form onSubmit={createNewPlaylistHandler}>
              <input
                type="text"
                value={displayPlaylist}
                onChange={(e) => setdisplayList(e.target.value)}
              />

              <button type="submit"> create playlist </button>
            </form>
          </div>
        </div>
      )}

      {playlists.map(({ _id, videos, title }) => (
        <div key={_id}>
          <input
            type="checkbox"
            checked={playlistId(videos, video._id)}
            onChange={(e) => playListHandler(e, _id, video._id)}
          />

          <p>{title}</p>
        </div>
      ))}
    </div>
  );
};
