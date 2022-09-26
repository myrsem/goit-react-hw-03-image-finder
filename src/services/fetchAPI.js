import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29225350-3af2603c162c678e18c25e7ab';

const fetchAPI = (searchQuery, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&per_page=12&page=${page}`,
    )
    .then(response => response.data.hits);
};

export default fetchAPI;