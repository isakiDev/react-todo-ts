import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Todos } from './components/Todos'

export const App = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-indigo-50'>
      <div className='bg-gray-50 max-w-[500px] mx-3 sm:mx-auto w-full p-10 shadow-sm'>
        <Header/>
        <Todos/>
        <Footer/>
      </div>
    </div>
  )
}
