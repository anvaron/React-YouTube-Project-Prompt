import React, { useState } from "react";
import { useParams } from "react-router";
import Youtube from "react-youtube";
import VideoCommentForm from "./VideoCommentForm";
import VideoCommentList from "./VideoCommentList";

function Video(props) {
  const [videoComment, setVideoComment] = useState([]);
  const [hasComment, setHasComment] = useState(false);
  const videoId = useParams().videoId;
  //
  const opts = {
    width: '50%',
    playerVars: {
     // https://developers.google.com/youtube/player_parameters
     autoplay: 0,
    },
  }; 

  const handleSubmit = (commentList) => {
    
    //Updating comments
    setVideoComment({commentList})
    setHasComment(true);
  };

  return (
    <>
      <Youtube videoId={videoId} opts={opts} />
      <VideoCommentForm handleUpdateComments={handleSubmit} />
      {hasComment ? <VideoCommentList comment={videoComment} /> : null }
    </>
  )
}

export default Video