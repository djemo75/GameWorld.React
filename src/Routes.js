import Contacts from './pages/Contacts';
import Forum from './pages/Forum';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Route, Routes as Switch } from 'react-router-dom';
import Layout from './components/Layout';

export const STATIC_ROUTES = {
  home: '/',
  forum: '/forum',
  contacts: '/contacts',
  notFound: '*',
};

const routes = [
  {
    path: STATIC_ROUTES.home,
    element: <Home />,
  },
  {
    path: STATIC_ROUTES.forum,
    element: <Forum />,
  },
  {
    path: STATIC_ROUTES.contacts,
    element: <Contacts />,
  },
  {
    path: STATIC_ROUTES.notFound,
    element: <NotFound />,
  },
];

const Routes = () => {
  const mappedRoutes = routes.map((route, i) => <Route key={i} {...route} />);
  return (
    <Layout>
      <Switch>{mappedRoutes}</Switch>
    </Layout>
  );
};

export default Routes;
