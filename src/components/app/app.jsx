import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PageNotFound from '../page-not-found/page-not-found';
import Page from '../page/page';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Page />
        </Route>
        <Route exact path="/page-not-found">
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
};

export default App;