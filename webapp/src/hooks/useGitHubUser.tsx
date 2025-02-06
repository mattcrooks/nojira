// src/hooks/useGitHubUser.ts
import { useQuery } from '@tanstack/react-query';
import { fetchGitHubUser, IGitHubUser } from '../services/GitHubService';
import { useAuth } from './useAuth';

/**
 * Custom hook to fetch GitHub user data.
 * This hook uses the AuthContext from react-oauth2-pkce to get the current
 * authentication state, including the access token. It then uses TanStack Query
 * (v5) to fetch and cache the GitHub user data.
 */
export const useGitHubUser = () => {
  // Instead of useAuth, use React's useContext with the AuthContext exported by the library.
  const { token } = useAuth();

  return useQuery<IGitHubUser, Error>({
    queryKey: ['github-user', token],
    queryFn: async () => {
      if (!token) {
        // Although the query should be disabled when no token is present, we add a guard.
        throw new Error('No access token available');
      }
      return fetchGitHubUser(token);
    },
    // Only run this query when the token exists.
    enabled: Boolean(token),
    // Cache the user data indefinitely (adjust staleTime as needed)
    staleTime: Infinity,
  });
};
