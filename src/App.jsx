import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import GetInvolved from './pages/GetInvolved';
import Donate from './pages/Donate';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';
import './App.css';

const ROUTES = {
  '/': Home,
  '/about': About,
  '/services': Services,
  '/get-involved': GetInvolved,
  '/donate': Donate,
  '/gallery': Gallery,
  '/news': News,
  '/contact': Contact,
};

function getCurrentPath() {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

function App() {
  const [path, setPath] = useState(getCurrentPath());

  useEffect(() => {
    const handleHashChange = () => {
      setPath(getCurrentPath());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const PageComponent = ROUTES[path] || Home;

  return (
    <>
      <Navbar currentPath={path} />
      <PageComponent />
      <Footer />
    </>
  );
}

export default App;
