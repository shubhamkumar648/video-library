import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
import { VideoCard } from "../../component";
import "./videoListing.css";
import { BsCollectionPlay } from "react-icons/bs";
import { MdOutlineExplore,MdOutlineWatchLater,MdHistory } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { useVideo } from "../../context/Videocontext";
import { filterVideos } from "../../utils/filter";

export const VideoListing = ()  => {
  
const {state,dispatch} = useVideo()
  
const {categories,videos,selectedCategory} = state
const [loading,setloading] = useState(true)

  useEffect(() => {

    (async() => {

    try{
      const response = await axios.get('/api/videos')
      setloading(false)
           dispatch({type: "SET_VIDEOS",payload: response.data.videos})
                }
  
                catch(error) {
                    console.log(error.response);
                }
              })();
    }, [])
  
     

    useEffect(() => {
      (async() => {
  
      try{
        const response = await axios.get('/api/categories')
        setloading(false)

             dispatch({type: "SET_CATEGORIES",payload: response.data.categories})
                  }
    
                  catch(error) {
                      console.log(error.response);
                  }
                })();
      }, [])
    
      const filtercard = filterVideos(videos,selectedCategory)


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
        
        <div>
        <div className="videocardFilter-container flex">
           

             {
               categories.map(({_id,categoryName}) => {

                 return (
                  <p key={_id}>
                <button  className="btn  btn__primary_outline"
                   onClick={() => dispatch({type:"FILTER_CATEGORIES", payload:categoryName})}
                >
                {categoryName}
                </button>
                </p>
                 )
               })
             }

       </div>

      <article className="videoList-container">
       {filtercard.map(item => {
         return (
           <div>
             <VideoCard video={item} key={item._id}/>
           </div>
         )
       })}


      </article>

       </div>

    </div>
  );
};
