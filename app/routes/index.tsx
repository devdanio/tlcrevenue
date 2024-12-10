import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
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

import { createFileRoute, redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { getWebRequest } from "vinxi/http";

const fetchClerkAuth = createServerFn({ method: "GET" }).handler(async () => {
  const { userId } = await getAuth(getWebRequest());

  if (userId) {
    throw redirect({
      to: "/dashboard",
    });
  }
  return {
    userId,
  };
});
export const Route = createFileRoute("/")({
  component: Home,
  beforeLoad: async () => await fetchClerkAuth(),
  ssr: false,
});

function Home() {
  const { isLoaded } = useUser();

  return (
    // temp fix for css sytles, all tailwind css is prefixed with #root
    <div id="root">
      <div className="h-full w-full bg-gradient-to-b from-[#43b27f] to-[#41b17f] flex items-center justify-center">
        <div
          className="bg-white rounded-xl overflow-hidden p-8 shadow-md animate-[fade-in-down_1s_ease-out]
                      opacity-0 [animation-fill-mode:forwards] "
        >
          {!isLoaded ? (
            <Skeleton className="rounded-full w-24 h-24" />
          ) : (
            <div className="flex flex-col gap-2">
              <img src="/images/logo-2.png" />
              {/* <Typography
                variant="h1"
                className="prose-headings:h1 mb-4 text-gray-700"
              >
                TLC Revenue
              </Typography> */}
              <SignedIn>
                <p>You are signed in</p>
                <UserButton />
                <SignOutButton />
              </SignedIn>
              <SignedOut>
                <SignInButton className="text-white bg-[#206e4a] rounded-lg w-full py-4 border-0 cursor-pointer hover:shadow-lg transition-all text-lg  " />
              </SignedOut>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
