import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Form from './components/Form';

//CSS prefix to scope CSS
const generateClassName = createGenerateClassName({
  productionPrefix: 'ser-b'
})

export default ({history, setSomeState, someState}) => {

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/*">
              <Form setSomeState={setSomeState} someState={someState}/>
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
