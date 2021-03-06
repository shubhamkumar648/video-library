import React from "react";
import { BsCollectionPlay } from "react-icons/bs";

import {MdOutlineExplore,MdOutlineWatchLater,MdHistory,} from "react-icons/md";

import { BiLike } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (


    <aside className="aside-content">

      <ul>

        <li className="sidebar_item_link ">
          <MdOutlineExplore className="fs-l" />
          <Link to="/videolist" className="link__nostyle">
            {" "}
            Explore
          </Link>
        </li>

        <li className="sidebar_item_link">
          <BiLike className="fs-l" />
          <Link to="/LikePage" className="link__nostyle">
            {" "}
            Like Page
          </Link>
        </li>

        <li className="sidebar_item_link">
          {" "}
          <BsCollectionPlay />
          <Link to="/playlist" className="link__nostyle">
               Playlist
              </Link>
        </li>

        <li className="sidebar_item_link">
          <MdOutlineWatchLater className="fs-l" />
          <Link to="/watchlater" className="link__nostyle">
            Watchlater
          </Link>
        </li>

        <li className="sidebar_item_link">
          <MdHistory className="fs-l" />
          <Link to="/history" className="link__nostyle">
            History
          </Link>
        </li>

      </ul>
      
    </aside>
  );
};
