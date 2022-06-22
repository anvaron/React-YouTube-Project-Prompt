import React from "react";

function VideoCommentList(props) {

  const getCommentsByVideo = (e) => {
    //
    if(e.commentList.length !== 0) {
      return (e.commentList).map((comment, index) =>  
        <li key={index}>
          {comment['name']} {comment['comment']}
        </li>);
    }
  }

  return (
    <ul>
      {getCommentsByVideo(props.comment)}
    </ul>
  )
}

export default VideoCommentList;