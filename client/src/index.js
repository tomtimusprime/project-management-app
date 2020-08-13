import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";
import * as serviceWorker from './serviceWorker';

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname
  );
};

console.log(window.location.origin);
ReactDOM.render(
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
      audience={process.env.REACT_APP_AUDIENCE}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}>
      <App />
    </Auth0Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
