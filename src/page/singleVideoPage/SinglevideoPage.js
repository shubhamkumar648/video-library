import axios from "axios";
import React from "react";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sidebar, SingleVideocard } from "../../component";
import { useVideo } from "../../context/Videocontext";

export const SinglevideoPage = () => {
  const { Id } = useParams();

  const { error } = useVideo();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${Id}`);
        setVideo(response.data.video);
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, [Id]);

  return (
    <div className="main-container">
      <Sidebar />
      <article>
        {/* <SingleVideocard  singleVideo={singleVideo}  key={singleVideo._id}/>  */}

        {!error && video ? (
          <SingleVideocard singleVideo={video} {...video} key={video._id} />
        ) : (
          <div>loading.......</div>
        )}
      </article>
    </div>
  );
};
