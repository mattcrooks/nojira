import React from 'react';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { ThemeProvider } from '@/providers/theme-provider';
import { AppSidebar } from './app-sidebar';
import { SiteHeader } from './site-header';
import { Outlet } from '@tanstack/react-router';
import { useAuth } from '@/hooks/useAuth';
import { LoginForm } from './login-form';

const MainLayout: React.FC = () => {
  const { token } = useAuth();

  return (
    <>
      {token ? (
        <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <SiteHeader />
              <div className="flex flex-1 flex-col gap-4 p-4">
                <Outlet />
              </div>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      ) : (
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
          <div className="w-full max-w-sm md:max-w-3xl">
            <LoginForm />
          </div>
        </div>
      )}
    </>
  );
};

export default MainLayout;
