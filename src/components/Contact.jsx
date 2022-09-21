import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll';

export default function Contact() {
    useEffect(() => {
        AOS.init({duration: 700});
      }, [])
    
    
  return (
<div name='contact' className='w-full h-full bg-[#091C29] flex justify-center items-center p-4 relative'>
        <form method='POST' action="https://getform.io/f/79c14fa9-87f8-4c35-a081-801de6005e1b" className='flex flex-col max-w-[600px] w-full pt-20 px-8'>
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
                    <h1 style={{borderRadius: '50%'}} className='bg-blue-600 w-4 h-4'>
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
                className='pb-8 relative'
                data-aos='fade-right'
                data-aos-duration="500"
            >
                <p className='text-4xl inline border-b-4 border-blue-600 text-slate-50'>Contact Me</p>
                <p className='text-gray-300 py-4'>// Submit the form below or send me a message via email - ( <a target={'_blank'} className='underline text-neutral-400 hover:text-blue-400' onClick={() => window.location = 'mailto:monzeridris01@gmail.com'}> monzeridris01@gmail.com</a> ) or whatsapp +249902708568</p>
                <div className='hidden md:block'><hr width="60%"
            style={{position: 'absolute', top: '15%', left: '42%'}} 
            className='flex justify-center align-middle '></hr>
            <hr width="60%"
            style={{position: 'absolute', top: '15%', left: '42%'}} 
            className='flex justify-center align-middle '></hr><hr width="60%"
            style={{position: 'absolute', top: '16%', left: '42%'}} 
            className='flex justify-center align-middle '></hr></div>
            </div>
            <input className='bg-[#ccd6f6] p-2 focus:outline-none' type="text" placeholder='Name' name='name' data-aos='fade-up'/>
            <input className='my-4 p-2 bg-[#ccd6f6] focus:outline-none' type="email" placeholder='Email' name='email' data-aos='fade-up'/>
            <textarea className='bg-[#ccd6f6] p-2 focus:outline-none' name="message" rows="10" placeholder='Message' data-aos='fade-up'></textarea>
            <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-800 px-4 py-3 my-8 mx-auto flex items-center' >Let's Collaborate</button>
        </form>
    </div>  )
}
