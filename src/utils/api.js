import axios from 'axios';

const API_KEY = 'AIzaSyArlqpAh_JBsAkCWG3qxKGgisHKD-3LHvU';

export default axios.create( {
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: API_KEY
  }
} );
