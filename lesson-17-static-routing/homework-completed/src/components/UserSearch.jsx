// Lesson 12: UserSearch — a controlled form component.
//
// Props:
//   - searchTerm: string  — the current input value (controlled by parent)
//   - onSearchChange: fn  — called when the user types (updates parent state)
//   - onSubmit: fn        — called when the form is submitted with a non-empty term
//
// Lesson 13: State is lifted to App.jsx. UserSearch no longer owns searchTerm.
// Validation prevents empty submissions and shows a small inline message.
// Lesson 12: onSubmit calls event.preventDefault() to prevent page reload.

import { useState } from 'react';

function UserSearch({ searchTerm, onSearchChange, onSubmit }) {
  // Local validation error — does not need to live in the parent
  const [validationError, setValidationError] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // Lesson 12: prevent default page reload

    // Lesson 13: simple validation — do not submit empty or whitespace-only term
    if (!searchTerm.trim()) {
      setValidationError('Please enter a name to search.');
      return;
    }

    setValidationError('');
    onSubmit(searchTerm.trim());
  }

  function handleChange(e) {
    onSearchChange(e.target.value);
    if (validationError) setValidationError('');
  }

  function handleClear() {
    onSearchChange('');
    setValidationError('');
    onSubmit(''); // Reset filter in parent
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-start">
      <div className="flex-1">
        {/* Lesson 12: controlled input — value bound to state */}
        <input
          id="user-search-input"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search users by name..."
          className="input input-bordered w-full"
          aria-label="Search users by name"
        />
        {/* Lesson 13: inline validation message (not a browser alert) */}
        {validationError && (
          <p className="text-error text-sm mt-1">{validationError}</p>
        )}
      </div>
      <div className="flex gap-2">
        <button type="submit" className="btn btn-primary">
          Search
        </button>
        {searchTerm && (
          <button type="button" className="btn btn-ghost" onClick={handleClear}>
            Clear
          </button>
        )}
      </div>
    </form>
  );
}

export default UserSearch;
