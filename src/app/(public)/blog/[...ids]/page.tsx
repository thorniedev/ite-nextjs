
export default async function CatchAllRoute({
    params
}: {
    params: Promise<{ids: string[]}>
}) {
    const {ids} = await params; 
  return (
    <div>
        <h1>Catch-All Dynamic Routing NextJS</h1>
        <p>My Blog catch-all: {ids}</p>
    </div>
  )
}
