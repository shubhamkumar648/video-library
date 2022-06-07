import React from 'react'
import { useVideoAction } from '../../context/Videoaction-context'
import { VideoCard } from "../../component";



export const WatchlaterPage = () => {

  const { videoactionState } = useVideoAction();

  const { watchLater } = videoactionState;

  return (
    <div>

    {
      !watchLater.length  ? (

      <div>please add watchlater </div>
      ):
      (
      <div>
      {
        watchLater.map(item => {

          return (
  <div>
 <VideoCard video={item} key= {item._id}/>
  </div>
          )
        })
      }

      </div>
      )
    }
    </div>
  )
}

