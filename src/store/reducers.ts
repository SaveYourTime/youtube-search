import { combineReducers } from 'redux';
import videoReducer from './video/reducer';

const reducers = combineReducers({
  video: videoReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
