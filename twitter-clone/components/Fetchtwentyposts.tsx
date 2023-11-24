import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response: AxiosResponse<Post[]> = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const fetchedPosts: Post[] = response.data.slice(0, 20);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>List of Posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
