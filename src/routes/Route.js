import React from "react";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import {
  HistoryPage,
  HomePage,
  LikevideoPage,
  Login,
  Playlist,
  PlaylistVideoPage,
  Signup,
  SinglevideoPage,
  VideoListing,
  WatchlaterPage
} from "../page";
import { RequireAuth } from "../utils/RequireAuth";


export const RoutePath = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
       
      <Route path = "/signup" element={<Signup />} />

      <Route path="/" element={<HomePage />} />

      <Route path="/videolist" element={<VideoListing />} />

      <Route path="/videolist/:Id" element={<SinglevideoPage />} />

      <Route path="/likePage" element={<RequireAuth> <LikevideoPage /></RequireAuth>} />

      <Route path="/watchlater" element = {<RequireAuth> <WatchlaterPage /></RequireAuth>}  />

      <Route path="/history" element={<RequireAuth> <HistoryPage /></RequireAuth>} />

      <Route path="/playlist/:Id" element={<RequireAuth> <PlaylistVideoPage /></RequireAuth>}  />

      <Route path="/playlist" element={<RequireAuth> <Playlist /> </RequireAuth>} />
      
      <Route path='/mockman' element={<Mockman />} />

    </Routes>
  );
};
