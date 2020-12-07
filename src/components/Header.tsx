import { ChangeEventHandler, FormEventHandler } from 'react';
import { useSelector } from 'react-redux';
import useThunkDispatch from '../hooks/useThunkDispatch';
import { RootState } from '../store/reducers';
import { setSearchTerm, fetchVideos } from '../store/video/action';

export default function Header() {
  const dispatch = useThunkDispatch();
  const { loading, searchTerm } = useSelector((state: RootState) => ({
    loading: state.video.loading,
    searchTerm: state.video.searchTerm,
  }));
  const canSubmit = !loading && searchTerm;

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (canSubmit) {
      dispatch(fetchVideos());
    }
  };

  const handleTextChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <header className="ui top fixed stackable menu">
      <div className="ui container">
        <div className="header item">
          <i className="video icon" />
          Video Search
        </div>
        <form className="right item" onSubmit={handleSubmit}>
          <div className={`ui action input ${loading ? 'loading' : ''}`}>
            <input
              type="text"
              placeholder="Search..."
              onChange={handleTextChange}
              value={searchTerm}
            />
            <button
              type="submit"
              className={`ui icon button ${loading ? 'loading' : ''}`}
              disabled={!canSubmit}
            >
              <i className="search icon" />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}
