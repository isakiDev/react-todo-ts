import { useContext } from 'react'
import { TodoContext } from '../context/todo'

export const useTodo = () => {
  const context = useContext(TodoContext)

  if (context === undefined) {
    throw new Error('useTodo is not accessible')
  }

  return context
}
