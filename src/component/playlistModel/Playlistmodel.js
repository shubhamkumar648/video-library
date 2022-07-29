import axios from "axios";
import React from "react";
import { useState } from "react";
import { useVideoAction } from "../../context/Videoaction-context";
import { playlistId } from "../../utils/playlistId";
import { MdOutlineAdd } from "react-icons/md";

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
          playlist: { title: displayPlaylist.trim() }
        },

        {
          headers: {
            authorization: localStorage.getItem("token")
          }
        }
      );

      videoactionDispatch({
        type: "ADD_TO_PLAYLIST",
        payload: response.data.playlists
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
            headers: { authorization: localStorage.getItem("token") }
          }
        );

        console.log(response);
        videoactionDispatch({
          type: "UPDATED_PLAYLIST",
          payload: response.data.playlist
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
              authorization: localStorage.getItem("token")
            }
          }
        );

        videoactionDispatch({
          type: "REMOVE_FROM_PLAYLIST",
          payload: response.data.playlist
        });

        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  const closeModel = () => {
    setModelDisplay();
  };

  return (
    <div className="Modal" onClick={closeModel}>
      <div className="Playlist" onClick={(e) => e.stopPropagation()}>
        <div className="Playlistmodel flex flex-col">
          <p className="f-xl font-xl">SAVE TO PLAYLIST</p>
          <hr />
          {playlists.map(({ _id, videos, title }) => (
            <div key={_id} className="Checkbox-input mt-1">
              <input
                type="checkbox"
                checked={playlistId(videos, video._id)}
                onChange={(e) => playListHandler(e, _id, video._id)}
              />

              <span className="ml-1"> {title} </span>
            </div>
          ))}

          <p className="create-playlist-container">
            {" "}
            <MdOutlineAdd onClick={createHandler} />
            CreatePlaylist
          </p>
        </div>

        {createPlaylist && (
          <div className="createPlaylist-content">
            <div className="createPlaylist-input flex flex-col">
              <form onSubmit={createNewPlaylistHandler}>
                <input
                  type="text"
                  className="input-text"
                  value={displayPlaylist}
                  placeholder="playlistname"
                  onChange={(e) => setdisplayList(e.target.value)}
                />

                <button type="submit" className="model-btn">
                  {" "}
                  Create Playlist{" "}
                </button>
                <button onClick={closeModel} className="ml-1 model-btn ">
                  Close
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
