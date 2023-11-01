import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo1.png";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center bg-gray-900 text-gray-300  px-4">
      {/* mobile view */}
      <div onClick={handleToggle} className="md:hidden z-10 ">
        {/* <FaBars className={`cursor-pointer transform ${ toggle ? 'rotate-180' : 'rotate-0'}`}/> */}
        {toggle ? (
          <FaTimes className="cursor-pointer transition-transform ease-in-out delay-1000 duration-1000 transform hover:scale-110" />
        ) : (
          <FaBars className="cursor-pointer transition-transform hover:scale-110 ease-in-out delay-1000 duration-1000 transform" />
        )}
      </div>

      <div>
        <img
          className="w-[40px] lg:ml-[70px] xl:ml[90px]"
          src={Logo}
          alt="initials"
        />
      </div>

      <ul className="hidden flex-row space-x-6 mr-[70px]  md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contacts" smooth={true} duration={500}>
            Contacts
          </Link>
        </li>
      </ul>

      {/* mobile navbar view */}
      <ul
        className={` ${
          toggle ? "block" : "hidden"
        } absolute top-0 left-0 md:hidden flex flex-col justify-center items-center w-3/4 h-screen bg-gray-900`}
      >
        <li className="py-6 text-[25px]">
          <Link onClick={handleToggle} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-[25px]">
          <Link onClick={handleToggle} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-[25px]">
          <Link onClick={handleToggle} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-[25px]">
          <Link
            onClick={handleToggle}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-[25px]">
          <Link
            onClick={handleToggle}
            to="contacts"
            smooth={true}
            duration={500}
          >
            Contacts
          </Link>
        </li>
      </ul>

      {/* Social media connection section */}
      <div className="hidden md:flex fixed flex-col top-[25%] right-0">
        <ul>
          <li className="w-[160px] h-[60px] cursor-pointer  bg-[#ca2128] flex justify-between items-center  mr-[-100px] hover:mr-[2px] duration-300  mt-[2px] ">
            <a
              href="https://drive.google.com/file/d/1iLM5clF2SfaNmpVCYXgm0iWpEpfEmlB4/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-200 px-[5px]"
            >
              <BsFillPersonLinesFill size={32} /> Resume
            </a>
          </li>

          <li className="w-[160px] h-[60px] cursor-pointer  bg-[#027fb1] flex justify-between items-center  mr-[-100px] hover:mr-[2px] duration-300   mt-[2px]">
            <a
              href="https://www.linkedin.com/in/samuel-tobi-makinde-0a495619a/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-200 px-[5px]"
            >
              <FaLinkedin size={32} /> Linkdein
            </a>
          </li>
          <li className=" bg-[#05aced] w-[160px] h-[60px] cursor-pointer  flex justify-between items-center mr-[-100px] hover:mr-[0] duration-300 mt-[2px] ">
            <a
              href="https://twitter.com/samuel_makins"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-200 px-[5px] "
            >
              <FaTwitter size={32} /> Twitter
            </a>
          </li>
          <li className=" bg-[#24292f] w-[160px] h-[60px] cursor-pointer  flex justify-between items-center mr-[-100px] hover:mr-[0] duration-300 mt-[2px]">
            <a
              href="https://github.com/Samuel-Makinde"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-200 px-[5px]"
            >
              <FaGithub size={32} /> Github
            </a>
          </li>
          <li className=" bg-[#7f7f7f] w-[160px] h-[60px] cursor-pointer  flex justify-between items-center mr-[-100px] hover:mr-[0] duration-300 mt-[2px]">
            <a
              href="mailto:samuelmakinde19@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-200 px-[5px]"
            >
              <HiOutlineMail size={32} /> Mail Box
            </a>
          </li>

          <li className=" bg-[#7189da] w-[160px] h-[60px] cursor-pointer  flex justify-between items-center mr-[-100px] hover:mr-[0] duration-300 mt-[2px]">
            <a
              href="https://discord.com/channels/@me"
              target="_blank"
              rel="noreferrer"
              className=" flex justify-between items-center w-full text-gray-200 px-[5px]"
            >
              <FaDiscord size={32} /> Discord
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
