import type { Metadata } from "next";

import ErrorState from "@/components/error/ErrorState";

export const metadata: Metadata = {
  title: "Unauthorized",
  description: "Authentication is required to access this page.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Unauthorized() {
  return (
    <ErrorState
      status="401"
      title="Authentication required"
      description="Please sign in before accessing this page."
    />
  );
}
