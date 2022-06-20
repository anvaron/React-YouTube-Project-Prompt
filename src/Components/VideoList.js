import React, { useState } from "react";
import VideoListItem from "./VideoListItem";
import { Link } from "react-router-dom";

// function VideoList (props) {

//   const { videoSearch } = props;
//   const [videoRows, setVideoRows] = useState([]);
//   //const list = Array.from(videoSearch)

//   return (
//     <>
//     {/* {console.log(typeof list)} */}
//     {/* {console.log(videoSearch)} */}
//       {/* {Array.from(videoSearch).map(e => {
//         return e
//       })} */}
//     </>
//   )
// }

// export default VideoList;

const VideoList = ({videos , handleVideoSelect}) => {
  const searchList = videos.map((video) => {
      // return <VideoListItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
      return  <Link key={video.id.videoId} to={`/videos/${video.id.videoId}`}>
                <div className=' video-item item'>
                  <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                  <div className='content'>
                      <div className='header '>
                        {video.snippet.title}
                      </div>
                  </div>
                </div>
              </Link>
  });

  return <div className='ui relaxed divided list'>{searchList}</div>;
};
export default VideoList;