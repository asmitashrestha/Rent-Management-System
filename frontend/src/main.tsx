import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient}>
    <ToastContainer />
          <App />

    </QueryClientProvider>
  </React.StrictMode>
  </BrowserRouter>
  ,
)
