import React from 'react';
import ReactDOMClient from 'react-dom/client';
// import { Provider } from 'react-redux';
import { RelayEnvironmentProvider } from 'react-relay';

import App from './pages/App';

import "./index.css";
import { createEnvironment } from './relay';
// import store from './store';

const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOMClient.createRoot(rootElement);
const environment = createEnvironment();

{/* <Provider store={store}>
  </Provider> */}
root.render(
  <RelayEnvironmentProvider environment={environment}>
    <App />
  </RelayEnvironmentProvider>
);
