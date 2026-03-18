import { Outlet } from 'react-router';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow p-8 max-w-6xl mx-auto w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content shadow-inner">
        <aside>
          <p>Copyright © {new Date().getFullYear()}</p>
        </aside>
      </footer>
    </div>
  );
}

export default Layout;
