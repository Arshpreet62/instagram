import { useEffect, useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`https://instagram-hd3k.onrender.com/`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <Context.Provider
      className="relative"
      value={{ user, setUser, post, setPost }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
