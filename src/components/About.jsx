import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll';

export default function About() {
  useEffect(() => {
    AOS.init({duration: 700});
  }, [])


  return (
    <div name='about' className='w-full h-screen bg-[#091C29] text-gray-300 relative '>
      <div className='max-w-[700px] mx-auto p-4 px-8 flex flex-col justify-center align-middle w-full h-full'>
        {/* dotted navbar */}
      <div className=' absolute top-[25%] left-2.5 bottom-0 h-1/2'>
          <ul className='flex flex-col justify-center relative hidden lg:block'>
              {/* <li className=''> */}
              <li className='my-5'>
                
                  <Link style={{color: 'white'}} smooth={true} duration={500} to="home">
                    <h1 style={{borderRadius: '56%'}}  className='bg-slate-50 bg-transparent border-2 w-4 h-4'>
                    <span className='bg-black px-2 py-1 rounded-md  w-16 block opacity-0 hover:opacity-100'>
                        home
                      </span>
                    </h1>  
                  </Link> 
              </li>
              <li  className='my-5'>
                
                  <Link style={{color: 'white'}} smooth={true} duration={500} to="about" >
                    <h1 style={{borderRadius: '56%'}} className=' bg-blue-600 w-4 h-4'>
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
        {/* "end of dotted navbar" */}
        <div className='max-w-[1000px] w-full flex justify-start align-middle px-4 relative'
        data-aos='fade-right'
        data-aos-duration="500">
        {/* <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'> */}
          <div 
            className=' pb-8 pl-4 '
            
          >
            <p className='text-3xl inline-block border-b-4 border-blue-600 m-auto p-1 text-slate-50'>
              About
            </p>
            
          </div>
          <div className='hidden md:block'>
          <hr width="70%"
            style={{position: 'absolute', top: '30%', left: '23%'}} 
            className='flex justify-center align-middle '></hr>
            <hr width="70%"
            style={{position: 'absolute', top: '31%', left: '23%'}} 
            className='flex justify-center align-middle '></hr><hr width="70%"
            style={{position: 'absolute', top: '32%', left: '23%'}} 
            className='flex justify-center align-middle '></hr></div>

          </div>
          <div className='max-w-[400px] w-full flex justify-center align-middle px-4'>
            {/* <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm monzer, nice to meet you. Please take a look around.</p>
            </div> */}
            <div 
              className='sm:text-left text-xl pb-8 pl-4 ml-4'
              data-aos='fade-left'
            >
              <p>
                I am passionate about building web applications that improves
              the lives of those around me. I specialize in mern stack development, responsive web applications,and learning new technologies. 
              </p>  
            </div>
          </div>
      </div>
    </div>  )
}
