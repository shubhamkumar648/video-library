import React from "react";
import { Routes,Route } from "react-router-dom";
import { HomePage, VideoListing } from "../page";

export const RoutePath = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/videolist" element={<VideoListing />} />
    </Routes>
  );
};
