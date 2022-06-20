import React from 'react';
//import '../style/video.css';

const VideoListItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header '>
                  {/* {video.snippet.channelTitle} */}
                  {video.snippet.title}
                  {/* {video.snippet.description} */}
                </div>
            </div>
        </div>
    )
};
export default VideoListItem;