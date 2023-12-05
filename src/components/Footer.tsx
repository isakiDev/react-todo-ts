import { useTodo } from '../hooks/useTodo'
import { BUTTONS_FILTER } from '../constans'

export const Footer = () => {
  const { onChangeFilter, filter } = useTodo()

  return (
    <footer className='flex gap-2 items-center py-4 font-bold text-gray-50'>
      {
        Object.entries(BUTTONS_FILTER).map(([key, { literal }]) => {
          const isSelected = filter === literal ? 'bg-indigo-500' : 'hover:bg-indigo-500'

          return (
            <button
              type='button'
              key={key}
              className={`px-4 py-1 bg-indigo-400 ${isSelected} rounded-sm`}
              onClick={() => { onChangeFilter(literal) }}
            >
              {literal}
            </button>
          )
        })
      }
    </footer>
  )
}
