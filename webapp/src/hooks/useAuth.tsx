// src/hooks/useAuth.ts
import { useContext } from 'react';
import { AuthContext } from 'react-oauth2-code-pkce';

/**
 * Custom hook to access authentication state and service.
 * This hook wraps useContext(AuthContext) and ensures that the context
 * is used within a proper provider.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
