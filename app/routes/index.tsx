import {
  SignedIn,
  UserButton,
  SignOutButton,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/tanstack-start";
import { getAuth } from "@clerk/tanstack-start/server";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";

const authStateFn = createServerFn("GET", async (_, { request }) => {
  const { userId } = await getAuth(request);

  if (userId) {
    throw redirect({
      to: "/dashboard",
    });
  }

  return { userId };
});

export const Route = createFileRoute("/")({
  component: Home,
  beforeLoad: async () => await authStateFn(),
});

function Home() {
  return (
    <div>
      <h1>TLC Revenue</h1>
      <SignedIn>
        <p>You are signed in</p>

        <UserButton />

        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <p>You are signed out</p>

        <SignInButton />

        <SignUpButton />
      </SignedOut>
    </div>
  );
}
