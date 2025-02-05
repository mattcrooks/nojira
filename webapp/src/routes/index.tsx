import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import '@/index.css';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Username } from '@/components/username/Username';
import { Problems } from '@/components/problems/Problems';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>

      <Username username="gsovereignty" />

      <Problems />
    </div>
  );
}
