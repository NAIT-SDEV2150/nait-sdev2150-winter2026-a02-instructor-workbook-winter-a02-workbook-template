import { useState, useEffect } from 'react';
import './index.css';

function simulateNetworkDelay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function Comment({ postId }) {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    async function load() {
      await simulateNetworkDelay(1200);
      setComments(["Looks great!", "First comment!", "Nice work."]);
    }
    load();
  }, [postId]);

  if (!comments) return <div className="loading"><span className="loader"></span> Loading comments (1.2s)...</div>;

  return (
    <div className="card subchild">
      <h4 className="card-header">Comments</h4>
      <ul>
        {comments.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
    </div>
  );
}

function Post({ userId }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function load() {
      await simulateNetworkDelay(1200);
      setPost({ id: 101, title: "My first post" });
    }
    load();
  }, [userId]);

  if (!post) return <div className="loading"><span className="loader"></span> Loading latest post (1.2s)...</div>;

  return (
    <div className="card child">
      <h3 className="card-header">{post.title}</h3>
      <Comment postId={post.id} />
    </div>
  );
}

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function load() {
      await simulateNetworkDelay(1200);
      setUser({ id: 1, name: "Jane Doe" });
    }
    load();
  }, []);

  if (!user) return <div className="loading"><span className="loader"></span> Loading user profile (1.2s)...</div>;

  return (
    <div className="card parent">
      <h2 className="card-header">Profile: {user.name}</h2>
      <Post userId={user.id} />
    </div>
  );
}

export default function App() {
  const [key, setKey] = useState(0);

  return (
    <div className="app-container animate-fade-in">
      <header>
        <span className="badge mb-4 inline-block">Demonstration</span>
        <h1 className="heading-app">Waterfall Loading</h1>
        <p className="text-muted">
          Notice how each nested component has to wait for its parent to finish loading before it can even <em>start</em> its own fetch request, causing sequential delays.
        </p>
        <button className="btn-primary mt-4" onClick={() => setKey(k => k + 1)}>Restart Demo</button>
      </header>
      
      <main key={key} className="max-w-4xl mx-auto mt-8">
        <UserProfile />
      </main>
    </div>
  );
}
