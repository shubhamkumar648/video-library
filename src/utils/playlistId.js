export const playlistId = (video, id) => {
  return video?.some((video) => video._id === id);
};
