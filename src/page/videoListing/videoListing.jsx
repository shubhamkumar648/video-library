import React from "react";
import { Sidebar, VideoCard } from "../../component";
import "./videoListing.css";

import { useVideo } from "../../context/Videocontext";
import { filterVideos } from "../../utils/filter";

export const VideoListing = () => {
  const { state, dispatch } = useVideo();
  const { categories, videos, selectedCategory } = state;

  const filtercard = filterVideos(videos, selectedCategory);

  return (
    <div className="main-container">
      <Sidebar />

      <div>
        <div className="videocardFilter-container flex">
          {categories.map(({ _id, categoryName }) => (
            <p
              key={_id}
              className="btn  btn__primary_outline"
              onClick={() =>
                dispatch({
                  type: "FILTER_CATEGORIES",
                  payload: categoryName
                })
              }
            >
              {categoryName}
            </p>
          ))}
        </div>

        <article className="videoList-container">
          {filtercard.map((item) => {
            return (
              <div key={item._id}>
                <VideoCard video={item} />
              </div>
            );
          })}
        </article>
      </div>
    </div>
  );
};
