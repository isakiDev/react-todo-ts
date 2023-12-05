import { useTodo } from '../hooks/useTodo'
import { Todo } from './Todo'

export const Todos = () => {
  const { filteredTodos } = useTodo()

  return (
    <main className='bg-indigo-100 rounded-md h-[200px] md:h-[400px] overflow-auto'>
      <ul className='flex flex-col gap-2 p-4'>
        {
          filteredTodos.map(todo => (
            <li
              key={todo.id}
            >
              <Todo
                completed={todo.completed}
                id={todo.id}
                title={todo.title}
              />
            </li>
          ))
        }
      </ul>
    </main>
  )
}
