import React from 'react'
import BlogDetail from '../BlogDetail';

export default async function page({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;

  return (
    <div>
      <h1>This is Value of ID: {id}</h1>
      <BlogDetail params={{ id }} />
    </div>
  )
}
