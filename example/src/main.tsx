import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const reactEntryPoint = document.getElementById('root');

if (reactEntryPoint) {
  ReactDOM.createRoot(reactEntryPoint).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
