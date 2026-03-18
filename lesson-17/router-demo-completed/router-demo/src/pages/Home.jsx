function Home() {
  return (
    <div className="hero min-h-[60vh] bg-base-100 rounded-box shadow-xl">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-primary">React Router</h1>
          <p className="py-6 text-lg">
            React Router is the standard routing library for React applications. It enables client-side routing,
            allowing your single-page application to update the URL and render different components seamlessly 
            without requesting a completely new document from the server.
          </p>
          <button className="btn btn-primary" onClick={() => window.location.href = '/glossary'}>
            View Glossary
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
