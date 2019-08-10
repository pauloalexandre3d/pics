import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID cc2b89592ca2da7a215a32bc89928d3aeaa3dcfe1564e8c03885a5a0eb001778'
  }
});
