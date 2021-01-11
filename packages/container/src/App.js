import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Progress from './components/Progress';
import Header from './components/Header';

import ServiceA from './components/ServiceAApp';
const ServiceBLazy = lazy(() => import('./components/ServiceBApp'));

//CSS prefix to scope CSS 
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
  const [someState, setSomeState] = useState("Default State");

  useEffect(() => {
    if (someState==="home") {
      history.push('/');
    }
  }, [someState]);



  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            someState={someState}
          />
          <div>
              <Suspense fallback={<Progress />}>
                <Switch>
                  <Route path="/form">
                      <ServiceBLazy setSomeState={(state)=>setSomeState(state)} someState={someState}/>
                  </Route>                  
                  <Route path="/">
                      <ServiceA />
                  </Route>
                </Switch>
              </Suspense>
            </div>
        </div>
      </StylesProvider>
    </Router>
  );
};