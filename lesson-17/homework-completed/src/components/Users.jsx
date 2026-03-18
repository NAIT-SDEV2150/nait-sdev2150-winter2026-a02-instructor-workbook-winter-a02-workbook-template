// Users — renders a filterable, selectable list of users.
//
// Lesson 7: Initially a static component displaying hard-coded data.
// Lesson 8: Added props (no selection yet).
// Lesson 9: Wrapped in Card (composition).
// Lesson 10: Responsive Tailwind layout applied.
// Lesson 11: DaisyUI component classes applied.
// Lesson 12: Added local selectedUserId state + click handler.
// Lesson 13: State lifted to App — now receives users, selectedUser, onSelectUser as props.
// Lesson 16: users prop comes from live API (via useUsers hook in App.jsx).

import Card from './ui/Card.jsx';

function Users({ users, selectedUser, onSelectUser, submittedSearchTerm }) {
  return (
    <Card title="Users">
      {/* Lesson 13: conditional rendering — show message when no results */}
      {users.length === 0 && submittedSearchTerm ? (
        <p className="text-sm text-base-content/60 py-4">
          No users match &ldquo;{submittedSearchTerm}&rdquo;.
        </p>
      ) : (
        <ul className="divide-y divide-base-200">
          {users.map((user) => {
            const isSelected = selectedUser && selectedUser.id === user.id;

            return (
              <li key={user.id}>
                {/* Lesson 12/13: click updates selectedUser via lifted callback */}
                <button
                  id={`user-${user.id}`}
                  type="button"
                  onClick={() => onSelectUser(isSelected ? null : user)}
                  className={[
                    'w-full text-left px-3 py-3 rounded transition-colors',
                    // Lesson 12: visual highlight for selected user
                    isSelected
                      ? 'bg-primary text-primary-content'
                      : 'hover:bg-base-200',
                  ].join(' ')}
                  aria-pressed={isSelected}
                >
                  <div className="font-semibold text-sm">{user.name}</div>
                  <div className="text-xs opacity-70">@{user.username}</div>
                  <div className="text-xs opacity-60">{user.email}</div>
                  <div className="text-xs opacity-60">{user.company.name}</div>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </Card>
  );
}

export default Users;
