import { createFileRoute } from '@tanstack/react-router'
import { Username } from '../components/username/Username'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Username username='gsovereignty' />
    </div>
  )
}
