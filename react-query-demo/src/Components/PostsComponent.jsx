import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
};

const PostsComponent = () => {
  const { data, isLoading, isError, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error fetching posts.</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Refetch Posts
      </button>
      {data.map(post => (
        <div key={post.id} className="border p-4 mb-2 rounded shadow-sm">
          <h2 className="font-bold text-lg">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
