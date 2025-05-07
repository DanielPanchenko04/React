import { createFileRoute } from '@tanstack/react-router'
import ShoppingList from "../pages/List.tsx";

export const Route = createFileRoute('/list')({
  component: ShoppingList,
})


