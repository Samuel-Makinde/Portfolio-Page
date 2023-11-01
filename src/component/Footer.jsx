import {FaGithub, FaLinkedin, FaDiscord, FaTwitter} from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';




export const Footer = () => {
  return (
    <div className="md:hidden w-full bg-gray-900  h-full">
        <div className="grid grid-col justify-center items-center py-[50px] text-white ">
            <ul className="flex">
                <li className="mr-4">
                    <a href="https://drive.google.com/file/d/1iLM5clF2SfaNmpVCYXgm0iWpEpfEmlB4/view?usp=sharing"  target='_blank' rel='noreferrer' className='flex justify-between items-center w-full text-gray-200 px-[5px]' >
           <BsFillPersonLinesFill size={32}/>
        </a>
                </li>
                <li className="mr-4">
                    <a href="https://www.linkedin.com/in/samuel-tobi-makinde-0a495619a/"  target='_blank' rel='noreferrer' className='flex justify-between items-center w-full text-gray-200 px-[5px]' >
           <FaLinkedin size={32}/> 
        </a>
                </li>
                <li className="mr-4">
                    <a href="https://twitter.com/samuel_makins" target='_blank' rel='noreferrer' className='flex justify-between items-center w-full text-gray-200 px-[5px] ' >
            <FaTwitter size={32}/> 
        </a>
                </li>
                <li className="mr-4">
                    <a href="https://github.com/Samuel-Makinde" target='_blank' rel='noreferrer' className='flex justify-between items-center w-full text-gray-200 px-[5px]'>
           <FaGithub size={32}/>
        </a>
                </li>
                <li className='mr-4'>
                    <a href="mailto:samuelmakinde19@gmail.com" target='_blank' rel='noreferrer' className='flex justify-between items-center w-full text-gray-200 px-[5px]'>
           <HiOutlineMail size={32} /> 
        </a>
                </li>
                <li className='mr-4'>
                    <a href="https://discord.com/channels/@me" target='_blank' rel='noreferrer'  className=' flex justify-between items-center w-full text-gray-200 px-[5px]'>
           <FaDiscord size={32}/> 
        </a>
                </li>
            </ul>
        </div>
    </div>
  )
}
