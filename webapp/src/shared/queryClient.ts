// src/shared/queryClient.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // because who wants to refetch on every tab focus?
      retry: 1, // a little retry logic never hurt anyone
    },
  },
});
