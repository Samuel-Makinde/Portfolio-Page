import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <main name='home' className="w-full h-screen bg-gray-100">
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-'>Hi my name is</p>
          <h1 className='text-6xl sm:text-7xl font-bold text-red-900'>Samuel Makinde</h1>
          <h2 className='text-red-800 text-3xl md:text-5xl  font-bold'>I am a Full-Stack Developer</h2>
          <p className='max-w-[600px] py-4 text-black' >I'm a passionate full-stack developer with a focus on creating exceptional web applications. I specialize in using the latest web technologies to deliver robust and user-friendly solutions. My work involves crafting both the frontend and backend components of web applications, ensuring a seamless user experience.
      </p>

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