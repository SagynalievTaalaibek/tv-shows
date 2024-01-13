import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound';
import Home from './containers/Home/Home';
import Movie from './containers/Movie/Movie';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/shows/:id'} element={<Movie />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
