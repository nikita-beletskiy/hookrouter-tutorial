import { useRoutes } from 'hookrouter';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const routes = {
  '/': () => <Home />,
  '/about*': () => <About />,
  '/contact/:name': ({ name }) => <Contact name={name} />
};

function App() {
  const match = useRoutes(routes);

  return (
    <Wrapper>
      <Navbar />
      {match || <NotFound />}
    </Wrapper>
  );
}

export default App;
