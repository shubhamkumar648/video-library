import React from 'react'
import { VideoCard } from '../../component'
import { useVideoAction } from '../../context/Videoaction-context'
import { ClearAllHistory } from '../../service'


export const HistoryPage = () => {

  const {videoactionState,videoactionDispatch}  = useVideoAction()

  const {history} = videoactionState

  const clearAllhistory = () => {

    ClearAllHistory(videoactionDispatch)
  }
  
  return (
    <>
    {!history.length ? (
      <div>do not have any video</div>
    ) : (
      <div>
        {history.map((item) => {
          return (
            <div>
              <VideoCard video={item} key={item._id} />
            </div>
          );
        })}
      </div>
    )}
  </>
  )
}


