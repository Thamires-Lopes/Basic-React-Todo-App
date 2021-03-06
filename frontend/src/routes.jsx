import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import TodoPage from './pages/Todo';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/todos',
    name: 'Todos',
    component: TodoPage,
  },
];

const Routes = () => (
  <BrowserRouter>
    <Header routes={routes} />
    <Switch>
      {routes.map(({ component, path }) => (
        <Route
          exact
          key={path}
          path={path}
          component={component}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
