// src/pages/auth/callback.tsx
import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAccessToken } from '@/hooks/user-access-token';
import { useNavigate } from '@tanstack/react-router';

type ExchangeResponse = {
  accessToken: string;
};

const exchangeCodeForToken = async (
  code: string
): Promise<ExchangeResponse> => {
  const response = await fetch(
    `http://localhost:3000/auth/github/callback?code=${code}`
  );
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'Failed to exchange code for token');
  }
  return response.json();
};

const GithubAuthCallback: React.FC = () => {
  const navigate = useNavigate();
  const { saveToken } = useAccessToken();
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get('code') as string;

  const { data, error, isLoading } = useQuery<ExchangeResponse, Error>({
    queryKey: ['github-token', code],
    queryFn: () => exchangeCodeForToken(code),
    enabled: Boolean(code),
    staleTime: Infinity,
  });

  useEffect(() => {
    if (data?.accessToken) {
      console.log('Access token received:', data.accessToken);
      saveToken(data.accessToken);
      window.history.replaceState({}, document.title, '/');
      navigate({ to: '/' });
    }
  }, [data, saveToken, navigate]);

  if (!code) {
    return <div>Error: No authorization code provided in the URL.</div>;
  }

  if (isLoading) {
    return <div>Exchanging code for token, please wait...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>Redirecting...</div>;
};

export default GithubAuthCallback;
