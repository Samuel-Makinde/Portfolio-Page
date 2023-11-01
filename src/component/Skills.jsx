import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Tailwind from '../assets/tailwind.png'
import Javascript from '../assets/javascript.png'
import Reactjs from '../assets/react.png'
import Github from '../assets/github.png'
import Redux from "../assets/redux.png"
import node from "../assets/node.jpeg"
import express from "../assets/express.png"
import mongodb from "../assets/mongodb.png"

const Skills = () => {
  return (
    <main name='skills' className="w-full h-[1000px]">
        <div className="max-w-[1000px] w-full h-full mx-auto p-4 flex flex-col justify-center items-center">
            <div >
                <h1 className=" font-bold text-4xl border-b-4 border-b-rose-900">Skills</h1>
                
            </div>

            <div className=' w-full grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-4 text-center text-gray-100 '>
                <div className=' mt-[20px] cursor-pointer  shadow-md shadow-gray-950 hover:scale-110 duration-500 bg-gray-900 py-4 lg:w-[270px]'>
                    <img className='w-[80px] mx-auto' src={Html} alt="html-5" />
                    <p className='py-[10px]'>Html</p>
                </div>
                <div className=' mt-[20px] cursor-pointer  shadow-md shadow-gray-950 hover:scale-110 duration-500 bg-gray-900 py-4 lg:w-[270px]'>
                    <img className='w-[80px] mx-auto' src={Css} alt="CSS" />
                    <p className='py-[10px]'>CSS</p>
                </div>
                <div className=' mt-[20px] cursor-pointer shadow-md shadow-gray-950 hover:scale-110 duration-500 bg-gray-900 py-4 lg:w-[270px]'>
                    <img className='w-[80px] mx-auto' src={Tailwind} alt="Tailwind" />
                    <p className='py-[10px]'>Tailwind</p>
                </div>
                <div className=' mt-[20px] cursor-pointer shadow-md shadow-gray-950 hover:scale-110 duration-500 bg-gray-900 py-4 lg:w-[270px]'>
                    <img className='w-[80px] mx-auto' src={Javascript} alt="Javascript" />
                    <p className='py-[10px]'>Javascript</p>
                </div>
                <div className=' mt-[20px] cursor-pointer shadow-md shadow-gray-950 hover:scale-110 duration-500 bg-gray-900 py-4 lg:w-[270px]'>
                    <img className='w-[80px] mx-auto' src={Reactjs} alt="React.js" />
                    <p className='py-[10px]'>React.js</p>
                </div>
                <div className=' mt-[20px] cursor-pointer shadow-md shadow-gray-950 hover:scale-110 duration-500 bg-gray-900 py-4 lg:w-[270px]'>
                    <img className='w-[80px] mx-auto' src={Redux} alt="Github" />
                    <p className='py-[10px]' >Redux</p>
                </div>
                <div className=' mt-[20px] cursor-pointer shadow-md shadow-gray-950 hover:scale-110 duration-500 bg-gray-900 py-4 lg:w-[270px]'>
                    <img className='w-[80px] mx-auto' src={node} alt="Github" />
                    <p className='py-[10px]' >Node.js</p>
                </div>
                  <div className=' mt-[20px] cursor-pointer shadow-md shadow-gray-950 hover:scale-110 duration-500 bg-gray-900 py-4 lg:w-[270px]'>
                    <img className='w-[80px] h-[80px] mx-auto' src={express} alt="Github"  />
                    <p className='py-[10px]' >Express.js</p>
                </div>
              
                <div className=' mt-[20px] cursor-pointer shadow-md shadow-gray-950 hover:scale-110 duration-500 bg-gray-900 py-4 lg:w-[270px]'>
                    <img className='w-[80px] mx-auto' src={mongodb} alt="Github" />
                    <p className='py-[10px]' >MongoDB</p>
                </div>
                <div className=' mt-[20px] cursor-pointer shadow-md shadow-gray-950 hover:scale-110 duration-500 bg-gray-900 py-4 lg:w-[270px]'>
                    <img className='w-[80px] mx-auto' src={Github} alt="Github" />
                    <p className='py-[10px]' >Github</p>
                </div>
                 

            </div>
        </div>
    </main>
  )
}

export default Skills