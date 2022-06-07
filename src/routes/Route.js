import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HistoryPage,
  HomePage,
  LikevideoPage,
  SinglevideoPage,
  VideoListing,
  WatchlaterPage,
} from "../page";

export const RoutePath = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/videolist" element={<VideoListing />} />

      <Route path="/videolist/:Id" element={<SinglevideoPage />} />

      <Route path="/likePage" element={<LikevideoPage />} />

      <Route path="/watchlater" element={<WatchlaterPage />} />

      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
};
