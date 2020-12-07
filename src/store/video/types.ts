import SearchResult from '../../interfaces/search-result.interface';

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const FETCH_VIDEOS_REQUEST = 'FETCH_VIDEOS_REQUEST';
export const FETCH_VIDEOS_SUCCESS = 'FETCH_VIDEOS_SUCCESS';
export const FETCH_VIDEOS_FAILURE = 'FETCH_VIDEOS_FAILURE';
export const FETCH_NEXT_VIDEOS_REQUEST = 'FETCH_NEXT_VIDEOS_REQUEST';
export const FETCH_NEXT_VIDEOS_SUCCESS = 'FETCH_NEXT_VIDEOS_SUCCESS';
export const FETCH_NEXT_VIDEOS_FAILURE = 'FETCH_NEXT_VIDEOS_FAILURE';

export type VideoState = {
  loading: boolean;
  searchTerm: string;
  items: SearchResult[];
  nextPageToken: string;
  error: string;
};
