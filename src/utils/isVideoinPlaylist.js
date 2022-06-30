export const isVideoinPlaylist = (video,id) => {

return video?.some((video) => video._id === id)

 }