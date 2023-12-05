import { useState } from 'react'
import { useTodo } from '../hooks/useTodo'

export const CreateTodo = () => {
  const [inputValue, setInputValue] = useState('')
  const { onSaveTodo } = useTodo()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inputValue.length === 0) return

    onSaveTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex justify-between items-center pb-8'>
        <input
          placeholder='What do you want to do?'
          className='p-2 bg-gray-100 shadow w-full mr-2'
          type="text"
          value={inputValue}
          onChange={(e) => { setInputValue(e.target.value) }}
        />
        <button
          type='submit'
          className='font-bold px-4 py-2 bg-indigo-400 hover:bg-indigo-500 text-gray-50 rounded-sm'
        >Add</button>
      </div>
    </form>
  )
}
