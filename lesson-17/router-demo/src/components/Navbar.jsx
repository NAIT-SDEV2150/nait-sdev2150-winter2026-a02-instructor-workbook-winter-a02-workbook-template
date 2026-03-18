import { NavLink, Link } from 'react-router';

function Navbar() {
  return (
    <nav className="navbar bg-base-100 shadow-sm px-8">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl text-primary font-bold">RouterDemo</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? 'active font-bold text-primary bg-base-200' : '')}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/glossary"
              className={({ isActive }) => (isActive ? 'active font-bold text-primary bg-base-200' : '')}
            >
              Glossary
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/sample-code"
              className={({ isActive }) => (isActive ? 'active font-bold text-primary bg-base-200' : '')}
            >
              Sample Code
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
