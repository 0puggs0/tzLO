import {useEffect, useState} from 'react';
import {get} from '../../../api/api';
import {TPost, TResponsePosts} from '../types/postTypes';

const usePosts = () => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState<TPost[]>([]);
  const [refreshing, setRefreshing] = useState(true);
  const [postsCount, setPostsCount] = useState(0);

  useEffect(() => {
    getPosts();
  }, [offset]);

  const getPosts = async () => {
    setRefreshing(true);
    try {
      const response: TResponsePosts = await get(`/posts/feed`, {
        offset: offset,
        count: 10,
      });
      setData(prev => [...prev, ...response.data.items]);
      setPostsCount(response.data.count);
    } catch (e) {
      console.log(e);
    } finally {
      setRefreshing(false);
    }
  };
  const onEndReached = () => {
    if (!refreshing && offset < postsCount) {
      setOffset(prev => prev + 10);
    }
  };
  const onRefresh = () => {
    setData([]);
    setOffset(0);
    getPosts();
  };
  return {
    data,
    refreshing,
    onEndReached,
    onRefresh,
  };
};
export default usePosts;
