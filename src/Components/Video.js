import React from "react";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";

const Video = ({videoId}) => {
  const baseURL = `https://www.youtube.com/watch?v=` + {videoId};

  return (
      <div>
        <ReactPlayer url={baseURL} controls={true} />
        {/* <YouTube
          videoId={videoId}
        /> */}
      </div>
  )
}

export default Video;