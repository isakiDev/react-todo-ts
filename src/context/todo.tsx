import { createContext, useState } from 'react'
import {
  type TodoContextData,
  type Todo as TodoType,
  type TodoId,
  type TodoTitle,
  type FilterValue
} from '../types.d'
import { TODO_FILTERS } from '../constans'

const mockTodos = [
  {
    id: '1',
    title: 'A title',
    completed: false
  },
  {
    id: '2',
    title: 'A title 2',
    completed: true
  },
  {
    id: '3',
    title: 'A title 3',
    completed: true
  }
]

export const TodoContext = createContext<TodoContextData | undefined>(undefined)

interface Props {
  children: JSX.Element
}

export const TodoProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState(mockTodos)
  const [filter, setFilter] = useState<FilterValue>('all')

  const onToggleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => {
    const newTodo = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed }
      }

      return todo
    })

    setTodos(newTodo)
  }

  const onRemoveTodo = ({ id }: TodoId) => {
    const newTodo = todos.filter(todo => todo.id !== id)
    setTodos(newTodo)
  }

  const onChangeFilter = (filter: FilterValue) => {
    setFilter(filter)
  }

  const onSaveTodo = ({ title }: TodoTitle) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filter === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <TodoContext.Provider
      value={{
        filter,
        filteredTodos,
        onChangeFilter,
        onRemoveTodo,
        onSaveTodo,
        onToggleCompleted
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
