import React, { useState } from "react";
import { useParams } from "react-router";
import Youtube from "react-youtube";
import VideoCommentForm from "./VideoCommentForm";
import VideoCommentList from "./VideoCommentList";
import { Container, Box } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import "../styles/Video.css"

function Video(props) {
  // >> Setting hooks
  const [videoComment, setVideoComment] = useState([]);
  const [hasComment, setHasComment] = useState(false);
  const videoId = useParams().videoId;
  const currentURL = "/videos/"+videoId;
  // >> Video player settings
  const opts = {
    width: '80%',
    heigth: '100%',
    playerVars: {
     // https://developers.google.com/youtube/player_parameters
     autoplay: 0,
    },
  }; 

  const handleSubmit = (commentList) => {
    //Updating comments state
    setVideoComment({commentList})
    setHasComment(true);
  };

  return (
    <Container maxWidth="md">
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href={currentURL}
          aria-current="page"
        >
          Video
        </Link>
        
      </Breadcrumbs>
      <Box>
        <Youtube videoId={videoId} opts={opts} />
      </Box>
      <VideoCommentForm handleUpdateComments={handleSubmit} />
      {hasComment ? <Box m="auto"
                      maxWidth="sm"
                      display="flex" 
                      // width={500} height={50} 
                      bgcolor="#cfd8dc"
                      alignItems="center"
                      justifyContent="center"
                      className="search__label"
                    >
                      <VideoCommentList comment={videoComment} />
                    </Box>  : null }
    </Container>
  )
}

export default Video