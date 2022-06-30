export const filterVideos = (video, selectedCategory) => {
  const filterVideo = [...video]

  if (selectedCategory !== "All") {
    return filterVideo.filter((video) => video?.category === selectedCategory);
  }
  return filterVideo;
};
