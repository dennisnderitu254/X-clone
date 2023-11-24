import usePosts from '@/hooks/usePosts';

import PostItem from './PostItem';
import PostList from '../Fetchtwentyposts';

interface PostFeedProps {
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);

  return (
    <>
      {posts.map((post: Record<string, any>,) => (
        <PostItem userId={userId} key={post.id} data={post} />
      ))}

    <PostList />
    </>


  );
};

export default PostFeed;
