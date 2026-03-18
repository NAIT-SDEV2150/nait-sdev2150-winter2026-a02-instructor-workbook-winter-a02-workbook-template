import { useState } from 'react';
import { useUsers } from './hooks/useUsers.js';
import { usePosts } from './hooks/usePosts.js';
import { useSelectedUser } from './hooks/useSelectedUser.js';

import PageLayout from './components/layout/PageLayout.jsx';
import Header from './components/Header.jsx';
import UserSearch from './components/UserSearch.jsx';
import Users from './components/Users.jsx';
import Posts from './components/Posts.jsx';

// App is the root component and the single source of truth for shared state.
// Lessons 7-16 homework all build on this same project.
function App() {
  // Lesson 12: local state for the search input (controlled input)
  const [searchTerm, setSearchTerm] = useState('');

  // Lesson 13: lift state — submittedSearchTerm drives actual filtering
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState('');

  // Lesson 13/15: selected user is lifted to App; Lesson 15 wraps it in a custom hook
  const [selectedUser, setSelectedUser] = useSelectedUser();

  // Lesson 16: fetch users from JSONPlaceholder API on mount
  const { users, isLoading: usersLoading, error: usersError } = useUsers();

  // Lesson 16: fetch posts whenever the selected user changes
  const { posts, isLoading: postsLoading, error: postsError } = usePosts(
    selectedUser ? selectedUser.id : null
  );

  // Lesson 13: derive filtered users from submittedSearchTerm (submit-based, not live)
  const filteredUsers = submittedSearchTerm
    ? users.filter((u) =>
        u.name.toLowerCase().includes(submittedSearchTerm.toLowerCase())
      )
    : users;

  // Lesson 12/13: handle search form submission
  function handleSearchSubmit(term) {
    setSubmittedSearchTerm(term);
    // Clear selection when re-filtering
    setSelectedUser(null);
  }

  // Lesson 13: handle user selection (lifted from Users component)
  function handleSelectUser(user) {
    setSelectedUser(user);
  }

  return (
    <PageLayout
      header={<Header title="JSONPlaceholder Dashboard" subtitle="Users and Posts Explorer" />}
    >
      {/* Lesson 12: UserSearch — controlled input, form submit */}
      <UserSearch
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSubmit={handleSearchSubmit}
      />

      {/* Two-column section: Users list + Posts panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

        {/* Users column */}
        <section className="md:col-span-1">
          {/* Lesson 16: loading + error states for user fetch */}
          {usersLoading && (
            <div className="flex justify-center py-8">
              <span className="loading loading-spinner loading-md"></span>
            </div>
          )}
          {usersError && (
            <div className="alert alert-error">
              <span>Failed to load users: {usersError.message}</span>
            </div>
          )}
          {!usersLoading && !usersError && (
            <Users
              users={filteredUsers}
              selectedUser={selectedUser}
              onSelectUser={handleSelectUser}
              submittedSearchTerm={submittedSearchTerm}
            />
          )}
        </section>

        {/* Posts column — Lessons 13/16 */}
        <section className="md:col-span-1 lg:col-span-2">
          {postsLoading && (
            <div className="flex justify-center py-8">
              <span className="loading loading-spinner loading-md"></span>
            </div>
          )}
          {postsError && (
            <div className="alert alert-error">
              <span>Failed to load posts: {postsError.message}</span>
            </div>
          )}
          {!postsLoading && !postsError && (
            <Posts
              posts={posts}
              selectedUser={selectedUser}
            />
          )}
        </section>
      </div>
    </PageLayout>
  );
}

export default App;
