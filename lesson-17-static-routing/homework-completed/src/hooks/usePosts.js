import { useState, useEffect } from 'react';

// Lesson 16: Custom hook to fetch posts for a specific user.
//
// The dependency on userId means:
//   - When userId is null (no user selected), posts are cleared immediately
//   - When userId changes (user is selected/switched), a new fetch is triggered
//
// Stretch challenge from Lesson 16: encapsulate per-user post fetching in usePosts(userId).

export function usePosts(userId) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If no user is selected, clear posts and do not fetch
    if (!userId) {
      setPosts([]);
      return;
    }

    const controller = new AbortController();

    async function fetchPosts() {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error(`Request failed: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setPosts(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();

    return () => {
      controller.abort();
    };
  }, [userId]); // Re-run whenever the selected user changes

  return { posts, isLoading, error };
}
