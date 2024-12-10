import { UserButton, UserProfile } from "@clerk/tanstack-start";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/settings/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <UserButton />
      <UserProfile />
    </div>
  );
}
