import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={'Home'} />
        <Route path={'/shows/:id'} element={'Movie by id'} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
