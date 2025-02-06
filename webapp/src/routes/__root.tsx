import MainLayout from '@/components/layout/main-layout';
import { createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <MainLayout />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});
