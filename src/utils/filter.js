export const filterVideos = (videos,selectedCategory) => {

    const filterVideo = [...videos]

if(selectedCategory !=="All") {
         
         return filterVideo.filter((video) => selectedCategory === video.category)
}
   return filterVideo
}