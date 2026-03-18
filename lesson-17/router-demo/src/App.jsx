import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Glossary from './pages/Glossary';
import SampleCode from './pages/SampleCode';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="glossary" element={<Glossary />} />
        <Route path="sample-code" element={<SampleCode />} />
        {/* Catch-all Route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
