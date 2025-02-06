// src/providers/AuthProviderWrapper.tsx
import React, { ReactNode } from 'react';
import { authConfig } from '@/config/authConfig';
import { AuthProvider } from 'react-oauth2-code-pkce';

type AuthProviderWrapperProps = {
  children: ReactNode;
};

export const AuthProviderWrapper: React.FC<AuthProviderWrapperProps> = ({
  children,
}) => {
  return <AuthProvider authConfig={authConfig}>{children}</AuthProvider>;
};
