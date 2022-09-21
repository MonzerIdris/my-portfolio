import React, { useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaAws, FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaJs, FaLaptopCode, FaNode, FaReact, FaUps } from 'react-icons/fa'
import Wmongo from '../assets/Logomark_RGB-White.png'
import Gmongo from '../assets/Logomark_RGB_Spring-Green.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'


export default function Skills() {

    useEffect(() => {
        AOS.init({duration: 500});
      }, [])

  return (
    <div name='skills' className='w-full h-screen bg-[#091C29] text-gray-300 relative'>
    {/* Container */}
    <div className='max-w-[700px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-44 px-8'>
        
    <div className='absolute top-[25%] left-2.5 bottom-0 h-1/2'>
          <ul className='flex flex-col justify-center relative hidden lg:block'>
              {/* <li className=''> */}
              <li className='my-5'>
                
                  <Link style={{color: 'white'}} smooth={true} duration={500} to="home">
                    <h1 style={{borderRadius: '56%'}}  className='bg-slate-50 border-2 bg-transparent w-4 h-4'>
                    <span className='bg-black px-2 py-1 rounded-md  w-16 block opacity-0 hover:opacity-100'>
                        home
                      </span>
                    </h1>  
                  </Link> 
              </li>
              <li  className='my-5'>
                
                  <Link style={{color: 'white'}} smooth={true} duration={500} to="about" >
                    <h1 style={{borderRadius: '56%'}} className=' bg-slate-50 bg-transparent border-2 w-4 h-4'>
                      <span className='bg-black px-2 py-1 rounded-md  w-16 block opacity-0 hover:opacity-100'>
                        about
                      </span>
                     </h1> 
                  </Link>
              </li>
              <li className='my-5'>
                
                  <Link style={{color: 'white'}} smooth={true} duration={500} to="skills" >
                    <h1 style={{borderRadius: '50%'}} className='bg-blue-600 w-4 h-4 '>
                    <span className='bg-black px-2 py-1 rounded-md  w-16 block opacity-0 hover:opacity-100'>
                        skills
                      </span>
                    </h1>
                  </Link>
                
              </li>
              <li className='my-5'>
                <Link style={{color: 'white'}} smooth={true} duration={500} to="projects" >
                    <h1 style={{borderRadius: '50%'}} className='bg-slate-50 bg-transparent border-2 w-4 h-4 '>
                    <span className='bg-black px-2 py-1 rounded-md  w-16 block opacity-0 hover:opacity-100'>
                        projects
                      </span>
                    </h1>
                  </Link>
              </li>
              <li className='my-5'>
                <Link style={{color: 'white'}} smooth={true} duration={500} to="contact" >
                    <h1 style={{borderRadius: '50%'}} className='bg-slate-50 bg-transparent border-2 w-4 h-4'>
                    <span className='bg-black px-2 py-1 rounded-md  w-16 block opacity-0 hover:opacity-100'>
                        contact
                      </span>
                    </h1>
                  </Link>
              </li>
          {/* </li> */}
          </ul>
        </div>
        <div 
            className='max-w-[1000px] w-full flex justify-start align-middle px-4 relative'
            data-aos='fade-right'
            data-aos-duration="500">
            <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-slate-50'>Skills</p>
            <div className='hidden md:block'>
            <hr width="75%"
            style={{position: 'absolute', top: '50%', left: '20%'}} 
            className='flex justify-center align-middle '></hr>
            <hr width="75%"
            style={{position: 'absolute', top: '52%', left: '20%'}} 
            className='flex justify-center align-middle '></hr><hr width="75%"
            style={{position: 'absolute', top: '53%', left: '20%'}} 
            className='flex justify-center align-middle '></hr></div>
        </div>
         <p 
            className='p-4'
            data-aos='fade-right'
            data-aos-duration="500"
        >// These are the technologies I've worked with</p>
        <div className='w-full grid grid-cols-3
         sm:grid-cols-4 gap-4 text-center py-8' data-aos='fade-up' >
            <div><div
            style={{borderRadius: '50%'}}
            className='bg-slate-50 shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20 w-20 flex flex-col align-middle justify-center mx-auto'
            >
                {/* <img className='w-20 mx-auto' src={HTML} alt="HTML icon" /> */}
                {/* <FontAwesomeIcon icon="fa-brands fa-html5" /> */}
                <FaHtml5 color='rgb(234 88 12 / var(--tw-bg-opacity))' className='w-10 mx-auto h-10' /></div>
                <p style={{color: '#ddd'}} className='my-4 '>HTML5</p>
            </div>
            <div>
            <div
            style={{borderRadius: '50%'}}
            className='bg-slate-50 shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20 w-20 flex flex-col align-middle justify-center mx-auto'>
                {/* <img className='w-20 mx-auto' src={CSS} alt="HTML icon" /> */}
                <FaCss3Alt color='rgb(3 105 161 / var(--tw-bg-opacity))' className='w-10 h-10 mx-auto' /></div>
                <p style={{color: '#ddd'}} className='my-4 '>CSS3</p>
            </div>
            <div>
            <div
            style={{borderRadius: '50%'}}
            className='bg-slate-50 shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20 w-20 flex flex-col align-middle justify-center mx-auto'>
                {/* <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" /> */}
                <FaJs color='rgb(253 224 71 / var(--tw-text-opacity))' className='w-10 h-10 mx-auto' /></div>
                <p style={{color: '#ddd'}} className='my-4 '>JAVASCRIPT</p>
            </div>
            <div>
            <div
            style={{borderRadius: '50%'}}
            className='bg-slate-50 shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20 w-20 flex flex-col align-middle justify-center mx-auto'>
                {/* <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" /> */}
                <FaReact color='rgb(37 99 235 / var(--tw-text-opacity))' className='w-10 h-10 mx-auto' /></div>
                <p style={{color: '#ddd'}} className='my-4 text-blue-600'>REACT</p>
            </div>
            <div>
            <div
            style={{borderRadius: '50%'}}
            className='bg-slate-50 shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20 w-20 flex flex-col align-middle justify-center mx-auto'>
                {/* <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" /> */}
                <FaGithub color='030303' className='w-10 h-10 mx-auto' /></div>

                <p style={{color: '#ddd'}} className='my-4'>GITHUB</p>
            </div>
            <div>
            <div
            style={{borderRadius: '50%'}}
            className='bg-slate-50 shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20 w-20 flex flex-col align-middle justify-center mx-auto'>
                {/* <img className='w-20 mx-auto' src={Node} alt="HTML icon" /> */}
                <FaNode color='rgb(22 163 74 / var(--tw-bg-opacity))' className=' w-20 h-10 mx-auto' /></div>

                <p style={{color: '#ddd'}} className='my-4  '>NODE JS</p>
            </div>
            <div className='relative'>
            <div
            style={{borderRadius: '50%'}}
            className='bg-slate-50 shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20 w-20 flex flex-col align-middle justify-center relative mx-auto'>
                <img className='w-16 h-18  mx-auto absolute left-0 right-0 top-0' src={Gmongo} alt="MongoDB icon" /></div>
                <p style={{color: '#ddd'}} className=' absolute left-0 right-0 top-24 '>MONGO DB</p>
            </div>
            <div>
            <div
            style={{borderRadius: '50%'}}
            className=' bg-slate-100 shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20 w-20 flex flex-col align-middle justify-center mx-auto'>
                {/* <img className='w-20 mx-auto' src={AWS} alt="HTML icon" /> */}
                <FaBootstrap className='w-14 h-14 mx-auto' color='563d7c'/></div>
                <p style={{color: '#ddd'}} className='my-4 '>Bootstrap</p>
            </div>
        </div>
    </div>
  </div>
  )
}
