"use client";

import { useEffect } from "react";

import ErrorState from "@/components/error/ErrorState";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorState
      status="500"
      title="Something went wrong"
      description="The page could not be rendered. Try again, or return to the home page."
      digest={error.digest}
      onRetry={unstable_retry}
    />
  );
}
