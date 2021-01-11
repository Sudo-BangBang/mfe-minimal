import React from 'react';
import ReactDOM from 'react-dom';
import {createMemoryHistory, createBrowserHistory} from 'history';
import App from './App';

// Mount function to start up the app
const mount = (el, {onNavigate, defaultHistory, initialPath, setSomeState, someState}) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });

  if(onNavigate){
    history.listen(onNavigate);
  }
  
  ReactDOM.render(<App setSomeState={setSomeState} someState={someState} history={history}/>, el);

  return{
    onParentNavigate({pathname: nextPathname}){

      const { pathname} = history.location;

      if(pathname !== nextPathname){
        history.push(nextPathname)
      }
    },
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_service_b-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory(), setSomeState: ()=>{}, someState: "dev state" });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
