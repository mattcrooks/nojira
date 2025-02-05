// src/hooks/useAccessToken.ts
import { useState, useEffect, useCallback } from 'react';

const ACCESS_TOKEN_KEY = 'github_token';

export function useAccessToken() {
  // Initialize token from localStorage
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  });

  // Function to update token both in state and localStorage
  const saveToken = useCallback((newToken: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, newToken);
    setToken(newToken);
  }, []);

  // Function to clear the token
  const clearToken = useCallback(() => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    setToken(null);
  }, []);

  // Optional: keep the token in sync if localStorage changes from another tab
  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem(ACCESS_TOKEN_KEY));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return { token, saveToken, clearToken };
}
