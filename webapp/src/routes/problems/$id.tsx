import Problem from '@/components/problems/Problem';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/problems/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  return <Problem id={id} />;
}
