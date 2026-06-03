"use client";

import { useEffect } from "react";

import ErrorState from "@/components/error/ErrorState";

export default function DashboardError({
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
      title="Dashboard unavailable"
      description="The dashboard could not load its data. Try the request again."
      digest={error.digest}
      onRetry={unstable_retry}
      homeHref="/dashboard"
    />
  );
}
