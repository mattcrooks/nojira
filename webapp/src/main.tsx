import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

import client from './shared/apolloClient';
import { ApolloProvider } from '@apollo/client';

import './index.css';
import { AuthProviderWrapper } from '@/providers/AuthProvider';
import { QueryProviderWrapper } from '@/providers/QueryProvider';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthProviderWrapper>
        <QueryProviderWrapper>
          <ApolloProvider client={client}>
            <RouterProvider router={router} />
          </ApolloProvider>
        </QueryProviderWrapper>
      </AuthProviderWrapper>
    </StrictMode>
  );
}
