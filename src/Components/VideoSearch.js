import React, { useState } from "react";
import Search from "./Search";
import VideoList from "./VideoList";
import youtubeAPI from "../data/youtubeAPI";
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
import { Container, Box } from "@mui/material";

class Video extends React.Component {
  state = {
    videos: [],
    hasSearch: false,
    selectedVideo: null
  }
  handleSubmit = async (searchInput, maxResultsInput) => {
    const response = await youtubeAPI.get('/search', {
      params: {
          q: searchInput,
          maxResults: maxResultsInput
      }
    })
    this.setState({
      videos: response.data.items,
      hasSearch: true
    })
  };
  handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }
 
  render() {
    return(
      <Container maxWidth="md">
      <section className="search__layout">
        <Search
          handleFormSubmit={this.handleSubmit}
        />
        {this.state.hasSearch ? 
          <VideoList 
            handleVideoSelect={this.handleVideoSelect} 
            videos={this.state.videos}
          />
          : 
          <Box
            m="auto"
            display="flex" 
            width={500} height={50} 
            bgcolor="#cfd8dc"
            alignItems="center"
            justifyContent="center"
            className="search__label"
          >
            No Search Results Yet! Please submit a search above!  
          </Box>
        }
      </section>
      </Container>
    )
  }
}
export default Video;