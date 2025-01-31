import { createFileRoute } from '@tanstack/react-router'
import { Username } from '../components/username/Username'
import Problem from '../components/problems/Problem'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      
      <Username username='gsovereignty' />
      <Problem id='0x9be96148ea' />
    </div>
  )
}
