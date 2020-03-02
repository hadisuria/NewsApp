import axios from 'axios';

export default axios.create({
  baseURL: 'http://newsapi.org/v2',
  headers: {
    Authorization: 'Bearer 6ffba1b9b076475aba5aeb92394a8729',
  },
});
