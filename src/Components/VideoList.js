import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Grid } from '@material-ui/core';

const VideoList = ({videos}) => {
  const searchList = videos.map((video) => {
    return  <Link key={video.id.videoId} to={`/videos/${video.id.videoId}`}>
              <div className=' video-item item'>
                <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                <div className='content'>
                    {video.snippet.title}
                </div>
              </div>
            </Link>
  });

  return <div className='ui relaxed divided list'>{searchList}</div>;
};
export default VideoList;