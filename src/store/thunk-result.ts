import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './reducers';

type ThunkResult<Result = Promise<void>> = ThunkAction<
  Result,
  RootState,
  undefined,
  Action<string>
>;

export default ThunkResult;
