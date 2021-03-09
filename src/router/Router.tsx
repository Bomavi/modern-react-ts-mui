import { FC } from 'react';
import { Route, Router as RouterProvider, Switch } from 'react-router';

import { Home } from 'pages/Home';

import { history } from './config/history';

const Router: FC = () => {
  return (
    <RouterProvider history={history}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </RouterProvider>
  );
};

export { Router };
