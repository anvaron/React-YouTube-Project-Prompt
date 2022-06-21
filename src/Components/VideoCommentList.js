import React from "react";

function VideoCommentList(props) {

  const getCommentsByVideo = (e) => {
    //
    if(e.commentList.length !== 0) {
      return (e.commentList).map((comment) =>  
        <li key={comment.id}>
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