import React from 'react';
import { createRoot } from 'react-dom/client';
import './theme/tailwind.css';
import App from './App';
import moment from 'moment-timezone';
import './i18n/config';

// Set default timezone to Bangkok (Asia/Bangkok)
moment.tz.setDefault('Asia/Bangkok');
moment.locale('th');

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);