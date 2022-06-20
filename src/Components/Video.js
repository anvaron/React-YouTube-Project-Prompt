import React from "react";
import { useParams } from "react-router";
import Youtube from "react-youtube";
import VideoCommentForm from "./VideoCommentForm";

// const Video = ({videoId}) => {
//   const baseURL = `https://www.youtube.com/watch?v=` + {videoId};
//   console.log(baseURL)

//   return (
//       <div className="player">
//         <ReactPlayer url={baseURL} controls={true} />
//         {/* <YouTube
//           videoId={videoId}
//         /> */}
//       </div>
//   )
// }

// export default Video;

function Video(props) {
  const videoId = useParams().videoId;
  console.log("video par", useParams());
  console.log("video id", videoId);
  const opts = {
    width: '100%',
    playerVars: {
     // https://developers.google.com/youtube/player_parameters
     autoplay: 0,
    },
   }; 

  return (
    <section>
      <Youtube videoId={videoId} opts={opts} />
      <VideoCommentForm videoId={videoId} />
    </section>
  )
}

export default Video