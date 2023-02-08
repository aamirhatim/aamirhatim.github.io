import {createRoot } from 'react-dom/client';
import React from 'react';

import App from './components/App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <React.StrictMode><App /></React.StrictMode>
);