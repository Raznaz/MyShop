import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from '../page/Admin';
import Shop from '../page/Shop';
import { authRoutes, publicRoutes } from '../Router/routes';
import { ADMIN_ROUTE } from '../utils/constats';

const AppRouter = () => {
  const isAuth = false;
  return (
    <Switch>
      {isAuth &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} component={Component} exact />;
        })}

      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} component={Component} exact />;
      })}
    </Switch>
  );
};

export default AppRouter;
