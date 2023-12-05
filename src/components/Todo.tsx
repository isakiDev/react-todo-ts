import { type Todo as TodoType } from '../types.d'
import { useTodo } from '../hooks/useTodo'

export const Todo = ({ title, completed, id }: TodoType) => {
  const { onToggleCompleted, onRemoveTodo } = useTodo()

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggleCompleted({
      id,
      completed: e.target.checked
    })
  }

  const isCompleted = completed ? 'line-through' : ''

  return (
    <div className='flex justify-between items-center p-4 bg-gray-50'>
      <div className='flex gap-10 justify-center items-center'>
        <input
          placeholder='check'
          className='h-6 w-6'
          type="checkbox"
          checked={completed}
          onChange={handleChangeCheckbox}
        />
        <p className={`text-lg ${isCompleted} text-gray-400`}>{title}</p>
      </div>
      <button
        type='button'
        onClick={() => { onRemoveTodo({ id }) }}
      >✖️</button>
    </div>
  )
}
