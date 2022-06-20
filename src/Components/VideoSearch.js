import React, { useState } from "react";
import Search from "./Search";
import VideoList from "./VideoList";
import axios from 'axios';

import youtubeAPI from "../data/youtubeAPI";

class Video extends React.Component {
    state = {
        videos: [],
        hasSearch: false,
        selectedVideo: null
    }
    handleSubmit = async (searchInput) => {
        const response = await youtubeAPI.get('/search', {
            params: {
                q: searchInput
            }
        })
        console.log(response.data.items)
        this.setState({
            videos: response.data.items,
            hasSearch: true
        })
        console.log(this.state.videos)
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }
 
  render() {
  return(
    <>
      <Search 
        // handleOnChange={handleOnChange}
        // handleOnClick={handleOnClick}
        // search={videoSearch} 
        handleFormSubmit={this.handleSubmit}
      />
      {/* <VideoList videoSearch={setVideoSearch}/> */}
      {this.state.hasSearch ? 
        <VideoList 
        handleVideoSelect={this.handleVideoSelect} 
        videos={this.state.videos}
      />
      : <p>No search results yet!</p>
      }
    </>
  )
  }
}
export default Video;