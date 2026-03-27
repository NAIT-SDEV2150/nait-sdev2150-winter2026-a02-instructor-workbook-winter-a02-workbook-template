// Posts — renders a list of posts for the selected user.
//
// Lesson 7: Initially a static component displaying hard-coded post data.
// Lesson 8: Added props.
// Lesson 9: Wrapped in Card (composition).
// Lesson 10: Responsive Tailwind layout.
// Lesson 11: DaisyUI classes.
// Lesson 13: Filtered posts passed from App (derived from selectedUserId).
// Lesson 16: Posts fetched live from JSONPlaceholder API via usePosts hook.

import Card from './ui/Card.jsx';

function Posts({ posts, selectedUser }) {
  // Lesson 13: conditional rendering — prompt when no user is selected
  if (!selectedUser) {
    return (
      <Card title="Posts">
        <p className="text-sm text-base-content/60 py-4">
          Select a user to view their posts.
        </p>
      </Card>
    );
  }

  return (
    // Lesson 9: Card title is dynamic based on the selected user
    <Card title={`Posts by ${selectedUser.name}`}>
      {posts.length === 0 ? (
        <p className="text-sm text-base-content/60 py-4">
          No posts found for this user.
        </p>
      ) : (
        // Lesson 10: responsive grid — single column on mobile, multiple on larger screens
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {posts.map((post) => (
            <li
              key={post.id}
              id={`post-${post.id}`}
              // Lesson 11: DaisyUI card styling
              className="rounded-lg border border-base-200 bg-base-50 p-3 hover:bg-base-200 transition-colors"
            >
              <h3 className="font-semibold text-sm capitalize leading-snug">
                {post.title}
              </h3>
              {/* Lesson 7: excerpt — first 100 characters of body */}
              <p className="text-xs text-base-content/60 mt-1 leading-relaxed">
                {post.body.substring(0, 100)}
                {post.body.length > 100 ? '...' : ''}
              </p>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

export default Posts;
