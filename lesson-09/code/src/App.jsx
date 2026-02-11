import Header from './components/Header';
import Filters from './components/Filters';
import Results from './components/Results';
import Details from './components/Details';
import PageLayout from './components/layout/PageLayout';
import './App.css';

function App() {
  return (
    <>
      <PageLayout header={<Header tagline="Find the right resources, right away" />}>
        <Filters />
        <Results />
        <Details />
      </PageLayout>
    </>
  );
}

export default App;
