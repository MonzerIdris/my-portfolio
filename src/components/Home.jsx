import React, { useEffect } from 'react'
import Typical from 'react-typical'
import {HiArrowNarrowRight, HiOutlineArrowNarrowRight} from "react-icons/hi" 
import { Link } from 'react-scroll'
import useStartAnimation from '../animations/useStartAnimation';
import content from '../content';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaEnvelope, FaGit, FaGithub, FaGithubAlt, FaGithubSquare, FaLinkedin, FaMailBulk, FaMailchimp, FaRegEnvelope, FaVoicemail } from 'react-icons/fa';

export default function Home() {
    useEffect(() => {
        AOS.init({duration: 1000});
      }, [])

    const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
    const styleTranslate = 'translate-y-10 opacity-0';
    const animated = useStartAnimation();
  
    
    return (
    <div name='home' className='w-full h-full bg-[#091C29] relative'>
        {/* Container */}
      <div className='max-w-[1000px] mx-auto pt-32 px-8 flex flex-col justify-center align-middle text-center h-full '
           data-aos='fade-up'
           data-aos-anchor-placement="bottom"

      >
        <div className='absolute top-[25%] -left-[16%] bottom-0 h-1/2'>
          <ul className='flex flex-col justify-center relative hidden lg:block'>
              {/* <li className=''> */}
              <li className='my-5'>
                
                  <Link style={{color: 'white'}} smooth={true} duration={500} to="home">
                    <h1 style={{borderRadius: '56%'}}  className='bg-blue-600 w-4 h-4'>
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
                    <h1 style={{borderRadius: '50%'}} className='bg-slate-50 bg-transparent border-2 w-4 h-4 '>
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
        <h2
            className={`text-4xl md:text-4xl lg:text-5xl text-blue-600 font-bold  `}
          >
            {/* {content.header.text[0]} */}
            <span className='text-4xl font-light'>
            Hi! Let's work together
            </span>
            <br />
            {/* {content.header.text[1]} */}<div className='text-white my-6'>
            My Name Is Monzer Idris
            </div>
          </h2>
          <h1
            className={`text-xl md:text-4xl text-gray-400 mb-6`}
          >
            {/* {content.header.text[2]} */}
            I am a {' '}
            <Typical
              steps={[
                'full-stack developer.🖥',
                3000,
                'back-end developer.',
                3000,
                'front-end developer.',
                3000,        
              ]}
              className="inline-block"
              loop={Infinity}
              wrapper="p"
            />
          </h1>
        <div className='flex items-center justify-center'>
        <Link to='projects' spy={true} smooth={true} offset={50} duration={1000}>

          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center rounded-sm hover:bg-blue-600 hover:border-blue-800'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiOutlineArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </Link>
        </div>
        <div className='grid grid-cols-3 m-auto sm:grid-cols-3 gap-4 text-center py-8' >
            {/* <div
            style={{borderRadius: '50%'}}
            className='bg-cyan-700 shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-32 w-32 flex flex-col align-middle justify-center'
            data-aos='zoom-out'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />

                <FaHtml5 className='w-10 mx-auto h-10' />
                <p className='my-4'>HTML5</p>
            </div> */}
            <a target={'blank'} href='https://github.com/MonzerIdris'><div
            style={{borderRadius: '50%'}}
            className='bg-slate-50 shadow-md shadow-[#040c16]  h-20 w-20 flex flex-col align-middle justify-center cursor-pointer hover:scale-110 duration-500 hover:bg-slate-400' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                {/* <img className='w-20 mx-auto' src={CSS} alt="HTML icon" /> */}
                <FaGithub color='171515' className='w-8 h-8 mx-auto' />
                {/* <p className='my-4'>CSS3</p> */}
            </div></a>
            <a target={'blank'} href='https://www.linkedin.com/mwlite/in/monzer-idris-676531231'><div
            style={{borderRadius: '50%'}}
            className='bg-slate-50 shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20 w-20 flex flex-col align-middle justify-center cursor-pointer hover:bg-slate-400' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                {/* <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" /> rgb(37 99 235 / var(--tw-bg-opacity)*/}
                <FaLinkedin color='0072b1' className='w-8 h-8 mx-auto' />
                
            </div></a>
            
            <a  onClick={() => window.location = 'mailto:monzeridris01@gmail.com'}>
            <div
            style={{borderRadius: '50%'}}
            className='bg-slate-50 shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-20 w-20 flex flex-col align-middle justify-center cursor-pointer hover:bg-slate-400' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                {/* <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" /> */}
                <FaRegEnvelope color='darkred' className='w-8 h-8 mx-auto' />
            </div></a>
            </div>
      </div>
    </div>
  )
}
