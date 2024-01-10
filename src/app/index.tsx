import React from 'react';
import ReactDOMClient from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { RelayEnvironmentProvider } from 'react-relay';

import App from './pages/App';

import "./index.css";
import { BootstrapQueryType, fetchBootstrapData } from './api';
// import { createEnvironment } from './relay';
// import store from './store';

const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOMClient.createRoot(rootElement);
// const environment = createEnvironment();

const store: {root: BootstrapQueryType | null} = {root: null};

fetchBootstrapData().then((data) => {
  console.log('fetchBootstrapData data', data);
  store.root = data;
  root.render(<App store={store}/>);
});


{/* <Provider store={store}>
  </Provider> */}
  // <RelayEnvironmentProvider environment={environment}>
  // </RelayEnvironmentProvider>
root.render(<App store={store}/>);
