import axios from 'axios';
import SearchListParams from '../interfaces/search-list-params.interface';
import SearchListResponse from '../interfaces/search-list-response.interface';

const api = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    key: process.env.REACT_APP_API_KEY,
  },
});

export const searchByKeyword = (
  query: string,
  params?: SearchListParams
): Promise<SearchListResponse> =>
  api
    .get('search', {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: query,
        type: 'video',
        ...params,
      },
    })
    .then((res) => res.data);

export default api;
