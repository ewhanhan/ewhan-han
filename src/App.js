import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import About from './Pages/About/About';
import Layout from './Layout/Layout';

const App = () => {
  const routes = (
    <Switch>
      <Route exact path='/'>
        <About />
      </Route>
      <Route exact path='/projects'>
        <About />
      </Route>
      <Route exact path='/resume'>
        <About />
      </Route>
      <Redirect to='/' />
    </Switch>
  );

  return (
    <BrowserRouter basename='/'>
      {/* Switch is unique in that it renders a route exclusively */}
      <Layout>
        {routes}
      </Layout>
    </BrowserRouter>
  );
};

export default App;
