import React from 'react'
import { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi'
import { Link } from 'react-scroll'

export default function Navbar() {
    const [nav, setNav] = useState('false')
    const handleClick = () => setNav(!nav)
    return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-[#082333] text-slate-50 z-50">
        <div>
        <Link to='home' smooth={true} duration={1000}>
            <h1 className="font-poppins text-4xl cursor-pointer text-blue-600" style={{ }}>LOGO</h1>
        </Link>
        </div>
        
        {/* menu bar */}
        <div className='hidden md:flex'>
            <ul className='hidden md:flex justify-center text-2xl'>
            <li className='hover:text-blue-600'>
          <Link to='home' smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li className='hover:text-blue-600'>
          <Link to='about' smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li className='hover:text-blue-600'>
          <Link to='skills' smooth={true} duration={1000}>
            Skills
          </Link>
        </li>
        <li className='hover:text-blue-600'>
          <Link to='projects' smooth={true} duration={1000}>
            Projects
          </Link>
        </li>
        <li className='hover:text-blue-600'>
          <Link to='contact' smooth={true} duration={1000}>
            Contact
          </Link>
        </li>
            </ul>
        </div>
        <div onClick={handleClick} className='md:hidden z-20 text-xl w-9'>
            {nav ? <FaBars color='rgb(248 250 252 / var(--tw-text-opacity))' /> : <FaTimes />}
        </div>
        <ul className={nav ? 'hidden' : 'absolute z-10 top-0 left-0 w-full h-screen bg-[#091C29] text-slate-50 flex flex-col justify-center items-center'}>
            <li className='py-6 text-xl'>
                    {' '}
                <Link onClick={handleClick} to='home' smooth={true} duration={1000}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-xl'>
                    {' '}
                <Link onClick={handleClick} to='about' smooth={true} duration={1000}>
                    About
                </Link>
            </li>
            <li className='py-6 text-xl'>
                    {' '}
                <Link onClick={handleClick} to='skills' smooth={true} duration={1000}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-xl'>
                    {' '}
                <Link onClick={handleClick} to='projects' smooth={true} duration={1000}>
                    Projects
                </Link>
            </li>
            <li className='py-6 text-xl'>
                    {' '}
                <Link onClick={handleClick} to='contact' smooth={true} duration={1000}>
                    Contact
                </Link>
            </li>
        </ul>
        {/* dotted Navbar */}
        
        {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px]  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'>Github<FaGithub size={25} /></a>
                </li> 
                <li className='w-[160px] h-[60px]  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'>Linkedin<FaLinkedin size={25} /></a>
                </li>
                <li className='w-[160px] h-[60px]  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'>Email<HiOutlineMail size={25} /></a>
                </li>
            </ul>

        </div> */}
    </div>
  )
}
