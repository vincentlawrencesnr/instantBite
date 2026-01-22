import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'remixicon/fonts/remixicon.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)

// wrapping App in BrowserRouter enables client-side navigation. 