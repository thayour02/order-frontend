// import { StrictMode } from 'react'
console.log('Main JSX executing...');

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/authProvider.jsx'
console.log('Rendering React app...');

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>

  </BrowserRouter>

  ,
)
