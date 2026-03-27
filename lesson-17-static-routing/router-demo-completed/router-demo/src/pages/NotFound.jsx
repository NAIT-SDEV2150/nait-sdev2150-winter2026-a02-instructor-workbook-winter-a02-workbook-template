import { Link } from 'react-router';

function NotFound() {
  return (
    <div className="hero mt-12">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-9xl font-black text-error/30 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="py-6 min-h-[50px] text-lg text-base-content/80">
            Looks like you've wandered off the routing map. This path doesn't exist!
          </p>
          <Link to="/" className="btn btn-primary lg:btn-wide shadow-lg">
            Return to Safety (Home)
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
