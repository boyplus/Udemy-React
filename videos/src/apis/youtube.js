import axios from 'axios';
const KEY = 'AIzaSyAxlSYntUCFUSpY-Q5Kh0PDjshqLMFOqG0';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
