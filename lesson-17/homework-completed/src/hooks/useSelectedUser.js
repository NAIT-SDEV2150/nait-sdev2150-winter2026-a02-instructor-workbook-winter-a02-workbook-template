import { useState, useEffect } from 'react';

// Lesson 15: Custom hook — encapsulates selected-user state and sessionStorage persistence.
// Lesson 16: Converted to use useEffect for side-effect-based persistence (cleaner).
//
// The hook:
//   - Reads initial value from sessionStorage on first render (lazy initialization)
//   - Writes updated value to sessionStorage whenever selectedUser changes
//   - Returns [selectedUser, setSelectedUser] — a tuple matching the useState API
//
// Components never need to know about sessionStorage; that detail is encapsulated here.

const STORAGE_KEY = 'selectedUser';

export function useSelectedUser() {
  // Lazy initialization: read from sessionStorage once on mount
  const [selectedUser, setSelectedUser] = useState(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return null;
      }
    }
    return null;
  });

  // Lesson 16: useEffect persists changes as a side effect (runs after render)
  useEffect(() => {
    if (selectedUser === null) {
      sessionStorage.removeItem(STORAGE_KEY);
    } else {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(selectedUser));
    }
  }, [selectedUser]);

  return [selectedUser, setSelectedUser];
}
