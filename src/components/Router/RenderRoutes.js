import { Route, Switch } from 'react-router-dom';
import ROUTES from './Routes';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import { useLocation } from 'react-router-dom';

const RenderRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        {ROUTES.map((route) => (
          <Route
            path={route.path}
            key={route.key}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </AnimatePresence>
  );
};

export default RenderRoutes;
