import React, { useState } from "react";
import Search from "./Search";
import VideoList from "./VideoList";
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
      <>
        <Search
          handleFormSubmit={this.handleSubmit}
        />
        {this.state.hasSearch ? 
          <VideoList 
            handleVideoSelect={this.handleVideoSelect} 
            videos={this.state.videos}
          />
          : <p>No Search Results Yet! Please submit a search above!"</p>
        }
      </>
    )
  }
}
export default Video;