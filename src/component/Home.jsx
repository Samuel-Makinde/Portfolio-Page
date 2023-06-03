import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <main name='home' className="w-full h-screen bg-gray-100">
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-'>Hi my name is</p>
          <h1 className='text-6xl sm:text-7xl font-bold text-red-900'>Samuel Makinde</h1>
          <h2 className='text-red-800 text-3xl md:text-5xl  font-bold'>I am a FrontEnd Developer</h2>
          <p className='max-w-[600px] py-4 text-black' >i am a frontend developer using javascript, react, tailwindcss to design frontend application</p>

          <div>
            <button className='flex items-center px-2 border-2 border-gray-900 py-3 mt-3 hover:text-white hover:bg-gray-900 rounded-[10px] text-black'>
              <Link  to="projects" className='flex'  smooth={true}  duration={500} >
                View Projects <HiArrowNarrowRight className='ml-2' />
              </Link>
              </button>
          </div>
        </div>
        
    </main>
  )
}

export default Home