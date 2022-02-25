import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserService from './UserService';
import App2 from './App2';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';

const renderApp = () =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

UserService.initKeycloak(renderApp);


// ReactDOM.render(
//   <React.StrictMode>
//     <ReactKeycloakProvider
//       authClient={keycloak}
//       initOptions={{ onLoad: 'login-required' }}>
//       <App2 />
//     </ReactKeycloakProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
