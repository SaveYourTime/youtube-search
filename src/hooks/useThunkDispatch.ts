import { Action } from 'redux';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store/reducers';

type MyThunkDispatch = ThunkDispatch<RootState, undefined, Action<string>>;

const useThunkDispatch = (): MyThunkDispatch => useDispatch<MyThunkDispatch>();

export default useThunkDispatch;
