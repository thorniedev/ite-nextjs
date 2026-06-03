import type { Metadata } from "next";

import ErrorState from "@/components/error/ErrorState";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The requested page could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <ErrorState
      status="404"
      title="Page not found"
      description="The page may have moved, or the address may be incorrect."
    />
  );
}
