import { ReactNode } from 'react';
import useInfiniteLoader from 'react-use-infinite-loader';
import SearchResult from '../../interfaces/search-result.interface';
import ListWrapper from './ListWrapper';
import ListEmpty from './ListEmpty';
import Loading from '../shared/Loading';

interface ListProps {
  items: SearchResult[];
  canLoadMore: boolean;
  loadMore: () => void;
  renderItem: (item: SearchResult) => ReactNode;
}

export default function List({ items, canLoadMore, loadMore, renderItem }: ListProps) {
  const { loaderRef } = useInfiniteLoader({ canLoadMore, loadMore });
  if (!items.length) return <ListEmpty />;
  return (
    <ListWrapper className="ui five column doubling stackable grid">
      {items.map(renderItem)}
      {canLoadMore && <Loading ref={loaderRef} />}
    </ListWrapper>
  );
}
