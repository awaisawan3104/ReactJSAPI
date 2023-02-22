import React, { useState, useEffect } from 'react';

const API = 'http://uaenews.me/index.php/wp-json/wp/v2/posts';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.id}</li>
      ))}
    </ul>
  );
}

export default App;
