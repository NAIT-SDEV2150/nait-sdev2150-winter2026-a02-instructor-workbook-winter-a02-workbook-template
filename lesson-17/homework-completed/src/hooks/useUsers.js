import { useState, useEffect } from 'react';

// Lesson 16: Custom hook to fetch all users from the JSONPlaceholder API.
//
// Extracts the fetch + loading + error pattern into a reusable hook so
// App.jsx doesn't need to know the URL or manage the fetch lifecycle directly.
//
// Stretch challenge from Lesson 16: encapsulate fetching in useUsers() hook.

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // AbortController prevents state updates on an unmounted component
    const controller = new AbortController();

    async function fetchUsers() {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`Request failed: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setUsers(data);
      } catch (err) {
        // Ignore AbortError — component unmounted, no need to update state
        if (err.name !== 'AbortError') {
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();

    // Cleanup: abort in-flight request if component unmounts
    return () => {
      controller.abort();
    };
  }, []); // Empty array: run once on mount

  return { users, isLoading, error };
}
