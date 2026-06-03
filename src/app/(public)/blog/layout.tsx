import type { Metadata } from "next";
import React from 'react'

export const metadata: Metadata = {
  title: "Blog",
  description: "Read posts and App Router examples from ITE Next Shop.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
  return (
        <div className="min-h-full flex flex-col">
            
            <h1>Blog Layout</h1>

            <section>
                {children}
            </section>
        </div>
  )
}
