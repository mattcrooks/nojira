import { createFileRoute } from "@tanstack/react-router";
import { Problems } from "../../components/problems/Problems";

export const Route = createFileRoute("/problems/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Problems />;
}
