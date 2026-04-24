# SDEV2150 - Lesson 06: Component and Asynchronous Programming Exercises

These exercises reinforce asynchronous programming and web component concepts introduced in Lessons 02 through 05. 
Students will complete practical coding challenges that build their mastery of Promises, async/await, custom events, 
and API integration within reusable web components.

> Several of the exercises below make use of APIs from https://jsonplaceholder.typicode.com/.

---

## Exercise 1: API Data Display Component
**Goal:** Combine asynchronous data fetching with dynamic rendering.

**Instructions:**
1. Build a `<user-list>` component that retrieves and displays users from `https://jsonplaceholder.typicode.com/users`.
2. Add a "Reload Data" button that triggers a new fetch when clicked.
3. Display loading and error states to improve user experience.

**Key Concepts:** `fetch()`, `async/await`, `DOM updates`, `event handling`

---

## Exercise 2: Chained Promise Sequence
**Goal:** Practice sequential asynchronous logic using Promise chaining.

**Instructions:**
1. Fetch a list of posts from `https://jsonplaceholder.typicode.com/posts`, then use the first post's ID to fetch its comments from `https://jsonplaceholder.typicode.com/comments?postId={id}`.
2. Display the post title and its comments dynamically.
3. Handle network or parsing errors gracefully.

**Key Concepts:** `Promise chaining`, `sequential fetches`, `error handling`

---

## Exercise 3: Custom Event Integration
**Goal:** Reinforce communication between decoupled components.

**Instructions:**
1. Create two components: `<data-fetcher>` (fetches data) and `<data-display>` (renders data).
2. When fetching completes, dispatch a custom event named `data-loaded` containing the data.
3. Ensure `<data-display>` listens for the event and updates the UI accordingly.
4. Choose whatever endpoints you'd like to use from https://jsonplaceholder.typicode.com/.

**Key Concepts:** `Custom events`, `event dispatching`, `component communication`

---

## Exercise 4: Parallel API Requests
**Goal:** Demonstrate control over concurrent asynchronous operations.

**Instructions:**
1. Write a function that requests data from two APIs at the same time using `Promise.all()`.
2. Display both datasets after both requests succeed.
3. Use `Promise.allSettled()` to show results when one request fails.

**Key Concepts:** `Promise.all()`, `Promise.allSettled()`, `concurrency`, `error handling`

---

### Suggested Timing (110 minutes total)
| **Time** | **Activity** | **Focus** |
|-----------|---------------|-----------|
| ~20 min | Exercises 1 | Async fundamentals (`fetch`, `await`, DOM updates) |
| ~45 min | Exercises 2–3 | Sequential requests and event-driven communication |
| ~45 min | Exercise 4 | Parallel async workflows and robust error handling |
