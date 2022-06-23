import React, { useState } from "react";
import Search from "./Search";
import VideoList from "./VideoList";
import youtubeAPI from "../data/youtubeAPI";
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import SnackbarContent from '@mui/material/SnackbarContent';
import { Container, Box } from "@mui/material";


function Video () {
  // >> Setting hooks
  const [videos, setVideos] = useState([]);
  const [hasSearch, setHasSearch] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [search, setSearch] = useState('');

  const handleSubmit = async (searchInput, maxResultsInput) => {
    const response = await youtubeAPI.get('/search', {
      params: {
          q: searchInput,
          maxResults: maxResultsInput
      }
    })
    
    setVideos(response.data.items);
    setSearch(searchInput);
    setHasSearch(true);
  };
  const handleVideoSelect = (video) => {
    setSelectedVideo({video})
  }
 
  return(
    <Container maxWidth="md">
    <section className="search__layout">
      <Search
        handleFormSubmit={handleSubmit}
      />
      {hasSearch ? 
        <>
        <h4>Last search: <Chip label={search} /></h4>
        <Box 
          m="auto"
          display="flex" 
          // bgcolor="#cfd8dc"
          alignItems="center"
          justifyContent="center"
          className="search__list"
        >
        <VideoList videos={videos} />
        </Box>
        </>
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
export default Video;