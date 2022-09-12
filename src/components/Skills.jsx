import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaAws, FaCss3Alt, FaGithub, FaHtml5, FaJs, FaNode, FaReact } from 'react-icons/fa'
import Wmongo from '../assets/Logomark_RGB-White.png'

export default function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#091C29] text-gray-300'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='max-w-[1000px] w-full flex justify-start align-middle px-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
            {/* <p className='py-4'>// These are the technologies I've worked with</p> */}
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                {/* <img className='w-20 mx-auto' src={HTML} alt="HTML icon" /> */}
                {/* <FontAwesomeIcon icon="fa-brands fa-html5" /> */}
                <FaHtml5 className='w-20 mx-auto h-20' />
                <p className='my-4'>HTML5</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                {/* <img className='w-20 mx-auto' src={CSS} alt="HTML icon" /> */}
                <FaCss3Alt className='w-20 h-20 mx-auto' />
                <p className='my-4'>CSS3</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                {/* <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" /> */}
                <FaJs className='w-20 h-20 mx-auto' />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                {/* <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" /> */}
                <FaReact className='w-20 h-20 mx-auto' />
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                {/* <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" /> */}
                <FaGithub className='w-20 h-20 mx-auto' />

                <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                {/* <img className='w-20 mx-auto' src={Node} alt="HTML icon" /> */}
                <FaNode className='w-20 h-20 mx-auto' />

                <p className='my-4'>NODE JS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 relative'>
                <img className='w-20 h-22  mx-auto' src={Wmongo} alt="HTML icon" />
                <p style={{}} className=' absolute left-0 right-0 top-24'>MONGO DB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                {/* <img className='w-20 mx-auto' src={AWS} alt="HTML icon" /> */}
                <FaAws className='w-20 h-20 mx-auto'/>
                <p className='my-4'>AWS</p>
            </div>
        </div>
    </div>
  </div>
  )
}
