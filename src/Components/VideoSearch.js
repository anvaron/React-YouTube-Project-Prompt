import React, { useState } from "react";
import Search from "./Search";
import VideoList from "./VideoList";
import axios from 'axios';

import youtubeAPI from "../data/youtubeAPI";

//function Video () {
class Video extends React.Component {
    state = {
        videos: [],
        hasSearch: false,
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
      console.log(termFromSearchBar)
        const response = await youtubeAPI.get('/search', {
            params: {
                q: termFromSearchBar
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

    

 // const [videoSearch, setVideoSearch] = useState("");
  

  //const handleOnChange = async e => {
    //console.log(e.target.value)
    //setVideoSearch(e.target.value)
    //console.log(this.state.form)
    // this.setState({
    //   form: {
    //     ...this.state.form,
    //     [e.target.name]: e.target.value,
    //   },
    // });
  //}

  // const handleOnClick = async e => {
  //   console.log(process.env.REACT_APP_YOUTUBE_API_KEY)
  //   axios
  //       .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&type=video&q=${videoSearch}&safeSearch=none&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
  //       .then(response => {
  //         //console.log(response.data['items']);
  //         setVideoSearch(response.data['items'])
  //         console.log(typeof setVideoSearch);
  //         //createVideoRows(response.data['items']);
  //         //setIsError(false);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         //setIsError(true);
  //         //setIsLoading(false);
  //       })

    // fetch('https://www.googleapis.com/youtube/v3/search&key=AIzaSyBaEwAR_c8CrnGQ8h4JmbSkj1sbZ8HKAxsq=')
    // .then((result) => {
    //   this.setState({ petList: result.data });
    // });
    //console.log(this.state.form)
    // this.setState({ loading: true, error: null });

    // try {
    //   await api.badges.create(this.state.form);
    //   this.setState({ loading: false });

    //   this.props.history.push('/badges');
    // } catch (error) {
    //   this.setState({ loading: false, error: error });
    // }
  //};

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