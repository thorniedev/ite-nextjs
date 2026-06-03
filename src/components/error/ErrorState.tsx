"use client";

import { Home, RefreshCw } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type ErrorStateProps = {
  status: string;
  title: string;
  description: string;
  digest?: string;
  onRetry?: () => void;
  homeHref?: string;
};

export default function ErrorState({
  status,
  title,
  description,
  digest,
  onRetry,
  homeHref = "/",
}: ErrorStateProps) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6 py-16">
      <section className="w-full max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Error {status}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">{description}</p>

        {digest ? (
          <p className="mt-4 text-xs text-muted-foreground">Reference: {digest}</p>
        ) : null}

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {onRetry ? (
            <Button onClick={onRetry}>
              <RefreshCw />
              Try again
            </Button>
          ) : null}
          <Button asChild variant="outline">
            <Link href={homeHref}>
              <Home />
              Return home
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
