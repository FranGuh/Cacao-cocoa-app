import React from 'react';

const VideoCard = ({videoSource, videoText}) => {
  return (
    <div className='content-display__video'>
      <video 
        height="100%"
        width="100%" 
        loop
        muted
        autoPlay
      >
        <source src={videoSource} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div className='marca'>
        {videoText}
      </div>
    </div>
  )
}

export default VideoCard
