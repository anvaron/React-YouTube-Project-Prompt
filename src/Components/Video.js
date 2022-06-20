import React from "react";
import { useParams } from "react-router";
import Youtube from "react-youtube";
import ReactPlayer from "react-player";

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
  //const videoId = useParams().id;
  console.log("show video", props);
  return (
    <section>
      <Youtube videoId={props.id} />
      {/* <CommentSection videoId={videoId} /> */}
    </section>
  )
}

export default Video