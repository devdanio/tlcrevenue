import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/settings/app')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/settings/app"!</div>
}
