import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function SampleCode() {
  const samples = [
    {
      title: 'Setup BrowserRouter',
      file: 'src/main.jsx',
      importance: 'Wraps the React application to provide the routing context required by all other React Router hooks and components.',
      code: `import { BrowserRouter } from 'react-router';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);`
    },
    {
      title: 'Defining Routes',
      file: 'src/App.jsx',
      importance: 'Declares all paths and pairs them with their associated components. Uses nested routes with a main Layout.',
      code: `import { Routes, Route } from 'react-router';

// ...
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="glossary" element={<Glossary />} />
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>`
    },
    {
      title: 'Active Navigation (NavLink)',
      file: 'src/components/Navbar.jsx',
      importance: 'Demonstrates styling a link conditionally depending on whether its route is currently active.',
      code: `<NavLink 
  to="/glossary"
  className={({ isActive }) => 
    isActive ? 'active font-bold text-primary' : ''
  }
>
  Glossary
</NavLink>`
    },
    {
      title: 'Rendering Children (Outlet)',
      file: 'src/components/Layout.jsx',
      importance: 'A layout component frames the application (like Navbar and Footer), and <Outlet /> serves as a placeholder to inject matching child pages.',
      code: `import { Outlet } from 'react-router';
import Navbar from './Navbar';

function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Child routes render here */}
        <Outlet />
      </main>
    </div>
  );
}`
    }
  ];

  return (
    <div className="card w-full bg-base-100 shadow-xl border border-base-200">
      <div className="card-body">
        <h2 className="card-title text-4xl text-primary font-bold mb-6">Key Sample Code</h2>
        <div className="space-y-8">
          {samples.map((sample, idx) => (
            <div key={idx} className="bg-base-200 rounded-box p-6 border border-base-300">
              <h3 className="text-2xl font-bold text-secondary mb-2">{sample.title}</h3>
              <div className="badge badge-accent font-mono mb-4">{sample.file}</div>
              <p className="text-base-content/80 mb-4">{sample.importance}</p>
              
              {/* Syntax Highlighting block */}
              <div className="rounded-xl overflow-hidden shadow-lg font-mono text-sm leading-relaxed border border-base-300">
                <SyntaxHighlighter 
                  language="jsx" 
                  style={vscDarkPlus} 
                  showLineNumbers={true}
                  customStyle={{ margin: 0, padding: '1.5rem', backgroundColor: '#1e1e1e' }}
                >
                  {sample.code}
                </SyntaxHighlighter>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SampleCode;
