import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { VideoCard } from "../../component";
import "./videoListing.css";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineExplore,MdOutlineWatchLater,MdHistory } from "react-icons/md";
import { BiLike } from "react-icons/bi";



export const VideoListing = ()  => {
  
const [display,setDisplay] = useState([])

  useEffect( () => {
    
    (async() => {

    try{
      const response = await axios.get('/api/videos')
             setDisplay(response.data.videos)
             console.log(response);
                }
  
                catch(error) {
                    console.log(error.response);
                }
              })();
    }, [])
  

  return (
    <div className="main-container">
      <aside className="aside-content">
        <ul>
          <li className="sidebar_item_link ">
          <MdOutlineExplore className="fs-l"/>
          Explore</li>
          <li className="sidebar_item_link">
           <BiLike className="fs-l"/>
          Liked Page</li>
          <li className="sidebar_item_link"> <BsCollectionPlay/>
       Playlist</li>
          <li className="sidebar_item_link">
          <MdOutlineWatchLater className="fs-l"/>
          Watchlater
          </li>
          <li className="sidebar_item_link">
          <MdHistory className="fs-l"/>
          History</li>
        </ul>
      </aside>

      <article className="videoList-container">
       
       {display.map(item => {

         return (
           <div>
             <VideoCard videos={item} key={item._id}/>
           </div>
         )
       })}


      </article>

      

    </div>
  );
};
