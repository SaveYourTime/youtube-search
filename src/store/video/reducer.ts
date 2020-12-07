import { AnyAction } from 'redux';
import {
  VideoState,
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE,
  FETCH_NEXT_VIDEOS_REQUEST,
  FETCH_NEXT_VIDEOS_SUCCESS,
  FETCH_NEXT_VIDEOS_FAILURE,
  SET_SEARCH_TERM,
} from './types';

const initialState: VideoState = {
  loading: false,
  searchTerm: '',
  items: [],
  nextPageToken: '',
  error: '',
};

export default (state = initialState, action: AnyAction): VideoState => {
  const { type, payload } = action;

  switch (type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    case FETCH_VIDEOS_REQUEST:
    case FETCH_NEXT_VIDEOS_REQUEST:
      return { ...state, loading: true };
    case FETCH_VIDEOS_SUCCESS:
    case FETCH_NEXT_VIDEOS_SUCCESS:
      return { ...state, ...payload, loading: false };
    case FETCH_VIDEOS_FAILURE:
    case FETCH_NEXT_VIDEOS_FAILURE:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
