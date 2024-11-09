import {
  SignedIn,
  UserButton,
  SignOutButton,
  SignedOut,
  SignInButton,
  SignUpButton,
  useUser,
} from "@clerk/tanstack-start";
import { getAuth } from "@clerk/tanstack-start/server";
import { Box, Skeleton, Typography } from "@mui/material";
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
  const { isLoaded } = useUser();

  return (
    <Box className="h-full w-full bg-gradient-to-b from-[#43b27f] to-[#41b17f] flex items-center justify-center">
      <Box
        className="bg-white rounded-xl p-20 shadow-md animate-[fade-in-down_1s_ease-out]
                      opacity-0 [animation-fill-mode:forwards] "
      >
        {!isLoaded ? (
          <Skeleton variant="circular" />
        ) : (
          <>
            <Typography
              variant="h1"
              className="prose-headings:h1 mb-4 text-gray-700"
            >
              TLC Revenue
            </Typography>
            <SignedIn>
              <p>You are signed in</p>
              <UserButton />
              <SignOutButton />
            </SignedIn>
            <SignedOut>
              <SignInButton className="text-white bg-[#206e4a] rounded-lg w-full py-4 border-0 cursor-pointer hover:shadow-lg transition-all text-lg  " />
            </SignedOut>
          </>
        )}
      </Box>
    </Box>
  );
}
