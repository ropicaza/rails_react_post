import { API_URL } from "../constants";
import { useState, useEffect } from "react";

export default function PostLists() {
  const [posts, setPosts] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);
  // fetch posts from the backend

  useEffect(() => {
    // fetch(`${API_URL}/posts`)
    //   .then((res) => res.json())
    //   .then((data) => setPosts(data));
    async function fetchPosts() {
      try {
        const response = await fetch(`${API_URL}`);
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          throw response;
        }
      } catch (error) {
        setError("An error occurred while fetching the data");
        console.log("An error ocurred", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="border border-gray-200 p-4 my-4">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
