import { createFileRoute } from '@tanstack/react-router'
import Button from '../pages/Button.tsx'

export const Route = createFileRoute('/button')({
  component: Button,
})


