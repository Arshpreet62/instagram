import React, { useContext, useEffect, useState } from "react";
import Context from "./context/Context";
import PostSingle from "./PostSingle";

export default function Scroll() {
  const { post } = useContext(Context);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(1);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/posts/${page}`);
      const data = await response.json();
      setTotal(data.totalPages);
      setPosts((prev) => (page === 1 ? data.data : [...prev, ...data.data]));
    } catch (error) {
      console.error("Error fetching posts:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (page <= total) {
      fetchPosts();
    }
  }, [page]);

  return (
    <div
      style={{ height: `calc(100vh - 186px)` }}
      className="flex flex-col w-full   overflow-auto justify-start border-b border-b-gray-500/20"
    >
      {post.length > 0 &&
        post.map((p, index) => {
          return (
            <PostSingle
              p={p}
              key={index}
              posts={post}
              discription={p.discription}
            />
          );
        })}
      {posts.map((p, index) => (
        <PostSingle
          key={p.id}
          id={p.id}
          index={index}
          posts={posts}
          p={p}
          setPage={setPage}
          loading={loading}
        />
      ))}
    </div>
  );
}
