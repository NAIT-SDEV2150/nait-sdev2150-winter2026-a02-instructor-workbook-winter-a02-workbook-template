This lesson plan has been formatted with a clear hierarchy and structured elements to make the React Router 7 concepts easy to follow.

---

# Day 17: Static Routing with React Router 7
**SDEV2150** | **Topic:** Lesson 17 Static Routing

## Lesson Overview
In this lesson, you will learn how to transform a **Single-Page Application (SPA)** from a single-component structure into a multi-page experience using **React Router 7**.

Currently, our apps often live entirely inside `App.jsx`. As apps grow, we need a way to organize different features into "Pages" while keeping a consistent look and feel (like a navigation bar). We will set up a navigation system that changes the URL without refreshing the browser—the hallmark of a modern web application.

### Learning Objectives
* **Configure** React Router 7 using `BrowserRouter`, `Routes`, and `Route`.
* **Navigate** between pages using `Link` and `NavLink` without triggering full page reloads.
* **Implement** a layout route using `Outlet` to maintain a consistent UI (header/footer) across all pages.

---

## Conceptual Overview: SPAs vs Multi-Page Apps

### Traditional Multi-Page Applications (MPAs)
When you click a link in a traditional setup:
1. The browser requests a brand-new HTML file from the server.
2. The server sends the file.
3. The browser clears the current screen and reloads everything from scratch.

### React Single-Page Application (SPA)
1. The browser loads one HTML file **once**.
2. React Router **intercepts** clicks on links.
3. Instead of asking the server for a new page, it swaps the visible React components.
4. The URL updates, but the page never "flashes" or reloads.

### Comparison Table

| Feature | Multi-Page App (Traditional) | Single-Page App (React) |
| :--- | :--- | :--- |
| **Navigation** | Each URL = a separate HTML file | One HTML file; JS swaps components |
| **Reloading** | Full page reload on every click | No reload; instant component swaps |
| **State** | State is lost when you move pages | React state can be shared and persisted |
| **User Experience** | Slower, "clunky" transitions | Fast, app-like feel |

---

## React Router Core Components

| Component | Purpose |
| :--- | :--- |
| **`BrowserRouter`** | The parent provider that connects your app to the browser's URL history. |
| **`Routes`** | A container that looks at the current URL and decides which `Route` to show. |
| **`Route`** | Maps a specific URL path (like `/admin`) to a specific component. |
| **`Outlet`** | A "slot" or placeholder inside a layout route where the child pages appear. |
| **`Link` / `NavLink`** | Used for navigation. `NavLink` includes an `isActive` property for styling. |

---

## Step-by-Step Implementation

### Step 1: Install React Router
Open your frontend terminal and run the following command:
```bash
npm install react-router
```
> **Note:** In version 7, we import directly from the core `react-router` package.

### Step 2: Configure the Router (`main.jsx`)
We wrap our entire app in the router at the entry point so every component has access to navigation.

```javascript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.jsx';
import ResourceDirectoryPage from './pages/ResourceDirectoryPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* App.jsx serves as the "Layout" for everything inside it */}
        <Route path="/" element={<App />}>
          {/* Index is the "Home" or default view for this path */}
          <Route index element={<ResourceDirectoryPage />} />
          
          {/* Matches "/admin" */}
          <Route path="admin" element={<AdminPage />} />
          
          {/* The "*" path matches anything not defined above (404) */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
```

### Step 3: Update `App.jsx` to be a Layout
When a route is nested, the parent becomes a **Layout Route**. We use `<Outlet />` to mark where child content should be injected.

```javascript
import { Outlet } from 'react-router';
import Header from './components/Header';
import PageLayout from './components/layout/PageLayout';

function App() {
  return (
    <PageLayout header={<Header tagline="NAIT Student Resources" />}>
      {/* Whichever child route matches will appear here */}
      <Outlet />
    </PageLayout>
  );
}

export default App;
```

### Step 4: Add Navigation with `NavLink`
`NavLink` prevents reloads and allows conditional CSS based on the `isActive` state.

```javascript
import { NavLink } from 'react-router';

export default function Header() {
  return (
    <nav className="flex gap-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `p-2 ${isActive ? 'bg-blue-100 text-blue-700 font-bold rounded' : 'text-gray-600'}`
        }
      >
        Directory
      </NavLink>

      <NavLink
        to="/admin"
        className={({ isActive }) =>
          `p-2 ${isActive ? 'bg-blue-100 text-blue-700 font-bold rounded' : 'text-gray-600'}`
        }
      >
        Admin Panel
      </NavLink>
    </nav>
  );
}
```

---

## Coding Exercise (25 min)
**Build a small multi-page site for a local business:**
* **Home Page (`/`):** A "Welcome" screen.
* **Services Page (`/services`):** A list of services provided.
* **Contact Page (`/contact`):** Contact details.

**Technical Requirements:**
1. Set up your routes in `main.jsx`.
2. Create a shared Layout in `App.jsx` with a navigation menu.
3. Use `NavLink` for all menu items.
4. **Bonus:** Create a `NotFound.jsx` page and wire it up to the `*` path.

---

## Troubleshooting Common Errors

| Error | Likely Cause | Fix |
| :--- | :--- | :--- |
| **Page content is missing** | Forgot the `<Outlet />` component. | Add `<Outlet />` in the parent layout (`App.jsx`). |
| **Full page reload occurs** | Using `<a>` tags instead of `<NavLink>`. | Replace `<a>` with `<Link>` or `<NavLink>`. |
| **"No routes matched"** | Typos in the path or case-sensitivity. | Verify `path="admin"` in `main.jsx` matches `to="/admin"`. |
| **Styles not updating** | Using `Link` instead of `NavLink`. | Only `NavLink` provides the `isActive` state. |

---

## Homework: Users and Posts Refactor
Refactor your Users and Posts project from previous weeks to use React Router 7.

* **Setup:** Install `react-router` and move route logic to `main.jsx`.
* **Layout:** `App.jsx` should only contain your site-wide Header and the `<Outlet />`.
* **Pages:**
    * `DashboardPage.jsx`: Your existing User List and Posts display.
    * `ManageUserPage.jsx`: A new page with a form to Create/Edit users.
* **Navigation:** Ensure users can toggle between pages using a navbar.
* **Persistence:** Confirm that `sessionStorage` still works across routes.

Would you like me to explain how to pass data between these routes using React Router's `useLocation` or `useParams` hooks?