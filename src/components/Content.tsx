import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import useThunkDispatch from '../hooks/useThunkDispatch';
import { RootState } from '../store/reducers';
import { fetchNextVideos } from '../store/video/action';
import SearchResult from '../interfaces/search-result.interface';
import List from './List/List';
import ListItem from './List/ListItem';

const renderItem = (item: SearchResult) => {
  const { id, snippet } = item;
  const { title, description, thumbnails } = snippet!;
  return (
    <ListItem
      key={id?.videoId?.toString()}
      link={`https://www.youtube.com/watch?v=${id?.videoId}`}
      title={title!}
      description={description!}
      photo={thumbnails?.high?.url!}
    />
  );
};

export default function Content() {
  const dispatch = useThunkDispatch();
  const { items, nextPageToken } = useSelector((state: RootState) => ({
    items: state.video.items,
    nextPageToken: state.video.nextPageToken,
  }));
  const canLoadMore = !!nextPageToken;
  const loadMore = useCallback(() => dispatch(fetchNextVideos()), [dispatch]);

  return (
    <div className="ui container">
      <List items={items} canLoadMore={canLoadMore} loadMore={loadMore} renderItem={renderItem} />
    </div>
  );
}
