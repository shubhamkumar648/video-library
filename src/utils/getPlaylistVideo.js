
export const getPlaylistVideo = (video,Id) => {

  console.log(video);
  
    return video?.find((video) => video._id === Id) 

  }
  
