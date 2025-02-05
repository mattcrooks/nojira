import GithubAuthCallback from '@/components/auth/GithubAuthCallback';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/callback')({
  component: RouteComponent,
});

function RouteComponent() {
  console.log('RouteComponent');
  return <GithubAuthCallback />;
}
