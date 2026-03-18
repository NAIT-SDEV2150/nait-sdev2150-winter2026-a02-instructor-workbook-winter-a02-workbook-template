# SDEV2150 — Homework Completed (Days 7–16)

This project is a **reference implementation** for students who fell behind on homework.

It represents the fully completed state of the homework project built incrementally from **Lesson 7 through Lesson 16**.

---

## What This Project Demonstrates

Each lesson added a new capability to this growing React application:

| Lesson | Topic | What Was Added |
|--------|-------|----------------|
| 7 | Framework Foundations | Vite + React scaffold, Tailwind config, first JSX components (`Header`, static `Users`, static `Posts`) |
| 8 | Building Components | Props, children, structured component composition |
| 9 | Component Composition | `Card` wrapper, `PageLayout`, `App.jsx` reading like a page outline |
| 10 | Styling with Tailwind | Responsive layout with breakpoints (mobile → medium → large) |
| 11 | DaisyUI Integration | `data-theme`, DaisyUI component classes (`card`, `btn`, `badge`, `alert`) |
| 12 | Event Handling + State | `UserSearch` controlled input, `useState` in `Users` to highlight selected user |
| 13 | Lifting State | `selectedUser` and `searchTerm` lifted to `App.jsx`, submit-based filtering, conditional rendering |
| 14 | Exercise Day | Compound components, filterable list patterns |
| 15 | Custom Hooks | `useSelectedUser` hook encapsulates sessionStorage persistence |
| 16 | Component Lifecycle | `useEffect` for data fetching (`useUsers`, `usePosts`), loading/error states, AbortController cleanup |

---

## Project Structure

```
src/
  components/
    layout/
      PageLayout.jsx      # Lesson 9: reusable page wrapper
    ui/
      Card.jsx            # Lesson 9: reusable card shell
    Header.jsx            # Lesson 7: stateless header with props
    UserSearch.jsx        # Lesson 12: controlled form; Lesson 13: lifted state
    Users.jsx             # Lessons 7-13/16: evolving user list
    Posts.jsx             # Lessons 7-13/16: posts for selected user
  data/
    sampleData.js         # Hard-coded data used in Lessons 7-15
  hooks/
    useSelectedUser.js    # Lesson 15 (custom hook) + Lesson 16 (useEffect persistence)
    useUsers.js           # Lesson 16: fetches users from JSONPlaceholder
    usePosts.js           # Lesson 16: fetches posts for selected user
  App.jsx                 # Root — single source of truth for shared state
  main.jsx                # React entry point
  index.css               # Tailwind 4 + DaisyUI 5 import
```

---

## How to Run

```sh
# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Key Concepts Covered

### State Management
- Local state (`useState`) for controlled inputs
- Lifted state in `App.jsx` as single source of truth
- Custom hooks to encapsulate and reuse stateful logic

### Data Flow
- Props flow down from parent to child
- Callbacks flow up from child to parent (e.g., `onSelectUser`)
- Derived data computed in the parent (e.g., `filteredUsers`)

### Side Effects
- `useEffect` with an empty dependency array runs on mount (fetch users)
- `useEffect` with a dependency runs when that value changes (fetch posts by user)
- Cleanup functions using `AbortController` prevent stale updates

### Persistence
- `useState` with lazy initialization reads from `sessionStorage` once
- `useEffect` writes to `sessionStorage` whenever relevant state changes

### Component Design
- Presentational components (`Card`, `Header`) focus on display only
- Container components (`App`) manage state and pass data down
- Custom hooks extract reusable logic without adding components

---

## Reflection Questions

Before Day 17, consider:

1. Why must `fetch()` live inside `useEffect` and not directly in the component body?
2. What happens if you omit a dependency from the `useEffect` dependency array?
3. What is the difference between `searchTerm` and `submittedSearchTerm`? Why are both needed?
4. Why does `useSelectedUser` return a tuple (`[value, setter]`) instead of an object?
