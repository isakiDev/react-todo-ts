import { CreateTodo } from './CreateTodo'
import { ReactIcon, TailwindIcon, TypeScriptIcon } from './Icons'

export const Header = () => {
  return (
    <header>
      <h1 className='font-extrabold text-4xl text-indigo-500 text-center'>TODO APP</h1>
      <picture
        className='flex justify-center items-center gap-4 min-w-[100px] mx-auto py-8'
      >
        <ReactIcon/>
        <TailwindIcon/>
        <TypeScriptIcon/>
      </picture>
      <CreateTodo/>
    </header>
  )
}
