import { type TODO_FILTERS } from './constans'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type ListOfTodos = Todo[]
export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export interface TodoContextData {
  filter: FilterValue
  filteredTodos: ListOfTodos
  onChangeFilter: (filter: FilterValue) => void
  onRemoveTodo: ({ id }: TodoId) => void
  onSaveTodo: ({ title }: TodoTitle) => void
  onToggleCompleted: ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => void
}
