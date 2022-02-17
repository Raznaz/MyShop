import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Admin from '../page/Admin';
import Shop from '../page/Shop';
import { authRoutes, publicRoutes } from '../Router/routes';
import authStore from '../store/authStore';
import { ADMIN_ROUTE, SHOP_ROUTE } from '../utils/constats';

const AppRouter = () => {
  useEffect(() => {
    authStore.checkAuth();
  }, []);

  return (
    <Switch>
      {authStore.isAuth &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} component={Component} exact />;
        })}

      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} component={Component} exact />;
      })}
      <Redirect to={SHOP_ROUTE} />
    </Switch>
  );
};

export default observer(AppRouter);
