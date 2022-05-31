import React from 'react'

export const VideoCard = ({videos}) => {

    const {_id,thumbnail,duration,title,avatar,alt,creatorName,views} = videos

  return (


    <div className="videocard flex flex-col">
           <img src={thumbnail} alt="card img" className='img-responsive card-dimension' />
          <span className="duration flex">{duration}</span>
          <div className="card-content flex">
           <div className="content-avatar-container"> 
              <img src={avatar} alt="avatar" className='avatar-dimension'/>
            </div>
            <div className="content-discription ">
              <h7 className="font-l">{title} </h7>
              <span className="light">{creatorName}</span>
              <strong className="light">{views} views </strong>
            </div>
          </div>
    </div>

  )
}

