import React from 'react'

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
