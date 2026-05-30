import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import {App} from './App.tsx';
import { Auth0Provider } from "@auth0/auth0-react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const domain = import.meta.env.VITE_AUTH0_DOMAIN || 'dev-f6rj6ene0p76xwzx.us.auth0.com';
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID || '0KzArq6VTbzb4WtkGC78r9ablr4abikR';
if (!domain || !clientId) {
  throw new Error('Missing Auth0 environment variables')
}
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{ redirect_uri: window.location.origin }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth0Provider>
    </QueryClientProvider>
  </StrictMode>,
)
