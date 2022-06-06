import axios from "axios";
import React from "react";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sidebar, SingleVideocard } from "../../component";
import { useVideo } from "../../context/Videocontext";




export const SinglevideoPage = () => {
  const {Id} = useParams()
  console.log(Id);

 const {state,dispatch} = useVideo()

 const {videos} = state



  useEffect(() => {

    (async () => {
      try {
        const response = await axios.get(`/api/video/${Id}`);
        dispatch({type: "SET_VIDEOS", payload:response.data.video } )
      } catch (error) {
        console.log(response.error);
      }
    })();

  },[Id]);

  return (
    <div className="main-container">
      <Sidebar />
      <article>
        <SingleVideocard  singleVideo={videos}  key={videos._id}/>
      </article>
    </div>
  );
};
