import React from 'react';
import ReactDOM from 'react-dom/client';
import MUIToast from './toast/toast';
import { ToastProvider } from './toast/toast-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToastProvider>
      <MUIToast />
    </ToastProvider>
  </React.StrictMode>
);
