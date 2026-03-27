function Glossary() {
  const terms = [
    {
      term: 'BrowserRouter',
      definition: 'A top-level component that wraps your entire application, enabling routing functionality by keeping your UI in sync with the browser\'s URL.'
    },
    {
      term: 'Routes / Route',
      definition: '<Routes> looks through its children <Route> elements to find the best match and renders it. <Route> pairs a specific path pattern to a React component.'
    },
    {
      term: 'Link',
      definition: 'Used in place of standard <a> tags to navigate between pages. It intercepts the click to prevent a full page reload, handling navigation client-side.'
    },
    {
      term: 'NavLink',
      definition: 'A specialized version of <Link> that knows whether or not it is "active". Its isActive property is perfect for highlighting navigation menus.'
    },
    {
      term: 'Outlet',
      definition: 'Used within parent route components (like Layouts) to render their matching child routes.'
    },
    {
      term: 'useParams',
      definition: 'A hook that returns an object of key/value pairs from the current URL that were matched by the <Route path>. Useful for dynamic segments like /users/:id.'
    },
    {
      term: 'useNavigate',
      definition: 'A hook that gives you access to the navigate function, allowing you to programmatically navigate users (e.g., after submitting a form).'
    }
  ];

  return (
    <div className="card w-full bg-base-100 shadow-xl border border-base-200">
      <div className="card-body">
        <h2 className="card-title text-4xl text-primary font-bold mb-6">React Router Glossary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {terms.map((item) => (
            <div key={item.term} className="bg-base-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-secondary mb-2">{item.term}</h3>
              <p className="text-base-content/80">{item.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Glossary;
