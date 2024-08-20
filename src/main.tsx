import ReactDOM from 'react-dom/client'
import MyApp from './pages/index.tsx'
import App from './App.tsx'
import './index.css'
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './redux/userContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
