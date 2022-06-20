import axios from 'axios';
//const KEY = 'AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I';
//.get(`https://www.googleapis.com/youtube/v3/
//search?
//part=snippet
//&maxResults=9
//&type=video
//&q=${videoSearch}
//&safeSearch=none
//&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
//)
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: process.env.REACT_APP_YOUTUBE_API_KEY
    }
})