import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Box } from "@mui/material";

const VideoList = ({videos}) => {
  const searchList = videos.map((video) => {
    return  <Grid item xs={6}>
              <Link key={video.id.videoId} to={`/videos/${video.id.videoId}`}>
                <img className="video__thumb"
                  src={video.snippet.thumbnails.medium.url} 
                  alt={video.snippet.description}
                />
                <Box className="video__info"
                    m="auto"
                    alignItems="center"
                    justifyContent="center"
                >
                  {video.snippet.title}  
                </Box>
              </Link>
            </Grid>
  });

  return  <Grid container spacing={2} className="video__list" >
            {searchList}
          </Grid>
};
export default VideoList;