import { Dispatch } from 'redux';
import ThunkResult from '../thunk-result';
import {
  SET_SEARCH_TERM,
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE,
  FETCH_NEXT_VIDEOS_REQUEST,
  FETCH_NEXT_VIDEOS_SUCCESS,
  FETCH_NEXT_VIDEOS_FAILURE,
} from './types';
import { searchByKeyword } from '../../apis';

export const setSearchTerm = (searchTerm: string) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm,
});

export const fetchVideos = (): ThunkResult => async (dispatch: Dispatch, getState) => {
  dispatch({ type: FETCH_VIDEOS_REQUEST });
  const { searchTerm } = getState().video;
  try {
    const response = await searchByKeyword(searchTerm);
    const { items, nextPageToken } = response;
    dispatch({ type: FETCH_VIDEOS_SUCCESS, payload: { items, nextPageToken } });
  } catch (error) {
    dispatch({ type: FETCH_VIDEOS_FAILURE, payload: error.message });
  }
};

export const fetchNextVideos = (): ThunkResult => async (dispatch: Dispatch, getState) => {
  dispatch({ type: FETCH_NEXT_VIDEOS_REQUEST });
  const { searchTerm, nextPageToken, items } = getState().video;
  try {
    const response = await searchByKeyword(searchTerm, { pageToken: nextPageToken });
    const payload = {
      items: [...items, ...(response.items ?? [])],
      nextPageToken: response.nextPageToken ?? '',
    };
    dispatch({ type: FETCH_NEXT_VIDEOS_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: FETCH_NEXT_VIDEOS_FAILURE, payload: error.message });
  }
};
