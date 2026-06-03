import type { Metadata } from "next";

import ErrorState from "@/components/error/ErrorState";

export const metadata: Metadata = {
  title: "Forbidden",
  description: "You do not have permission to access this page.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Forbidden() {
  return (
    <ErrorState
      status="403"
      title="Access denied"
      description="You do not have permission to view this resource."
    />
  );
}
