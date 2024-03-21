import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppcontextProvider } from './context/Appcontext';
import { Authprovider } from './context/Authcontext';
import { SkeletonTheme } from 'react-loading-skeleton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Authprovider>
      <AppcontextProvider>
      <SkeletonTheme baseColor='#343a40' highlightColor='#495057'>
        <App />
      </SkeletonTheme>
      </AppcontextProvider>
    </Authprovider>
  </React.StrictMode>
);
