import React, { useEffect } from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'

export default function Projects() {

  useEffect(() => {
    AOS.init({duration: 1500});
  }, [])


  return (
<div name='projects' className='w-full h-full text-gray-300 bg-[#091C29] flex justify-center items-center p-4 relative'>
      <div className='flex flex-col max-w-[700px] w-full pt-20'>
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
                    <h1 style={{borderRadius: '50%'}} className='bg-blue-600 w-4 h-4 '>
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
        <div className='pb-8 relative' data-aos='fade-right'
        data-aos-duration="500">
          <p className='text-4xl inline border-b-4 border-blue-600 m-0 text-slate-50' 
             >
            My Projects
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
          <div className='hidden md:block'>
          <hr width="63%"
            style={{position: 'absolute', top: '15%', left: '32%', maxWidth: '460px'}} 
            className='flex justify-center align-middle '></hr>
            <hr width="63%"
            style={{position: 'absolute', top: '15%', left: '32%', maxWidth: '460px'}} 
            className='flex justify-center align-middle '></hr><hr width="63%"
            style={{position: 'absolute', top: '16%', left: '32%', maxWidth: '460px'}} 
            className='flex justify-center align-middle '></hr></div>
        </div>
       
        <div style={{width: '90%'}} className='mt-8 m-auto'>

        <div
              className="p-6 border border-lightText rounded-xl mb-4"
              data-aos='flip-left'
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            >
              <h3 className='text-xl font-bold transition-colors duration-500 text-slate-50'>Small e-commerce</h3>
              <p className='m-2'>A mern-stack e-commerce Website with user authentication and cart system</p>
              <div className="flex items-center flex-wrap -m-3 pt-5">
                  <a
                    href={'https://eshopp-heroku.herokuapp.com'}
                    className="underline flex items-center  py-1 px-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* <Image
                      src="/static/icons/link.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    /> */}
                    <FaLink size={15} />
                    <span className="ml-2  text-lightText  transition-colors duration-500">
                    https://eshopp-heroku.herokuapp.com
                    </span>
                  </a>

                
                  <a
                    href={`https://github.com/MonzerIdris/E-commerce/tree/main`}
                    className="underline flex items-center w-fit py-1 px-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* <Image
                      src="/static/icons/github.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    /> */}
                    <FaGithub />
                    <span className="ml-2  text-lightText  transition-colors duration-500">
                    https://github.com/MonzerIdris/E-commerce/tree/main
                    </span>
                  </a>
                  </div>
                  </div>
                  <div
              className="p-6 border border-lightText rounded-xl mb-4"
              data-aos='flip-right'
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <h3 className='text-xl font-bold transition-colors duration-500 text-slate-50'>Netflix clone</h3>
              <p className='m-2'>Netflix landing page clone i did a while ago, Built with html css scss</p>
              <div className="flex items-center flex-wrap -m-3 pt-5">
                  <a
                    href={'https://netflix-landing01.herokuapp.com/'}
                    className="flex items-center  py-1 px-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* <Image
                      src="/static/icons/link.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    /> */}
                    <FaLink className='' />
                    <span className="underline ml-2  text-lightText  transition-colors duration-500">
                    https://netflix-landing01.herokuapp.com
                    </span>
                  </a>

                
                  <a
                    href={`https://github.com/MonzerIdris/netflix-clone`}
                    className="flex items-center py-1 px-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* <Image
                      src="/static/icons/github.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    /> */}
                    <FaGithub />
                    <span className="underline ml-2  text-lightText  transition-colors duration-500">
                    https://github.com/MonzerIdris/netflix-clone
                    </span>
                  </a>
                  </div>
                  </div>

                  <div
              className="p-6 border border-lightText rounded-xl mb-4"
              data-aos='flip-up'
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <h3 className='text-xl font-bold transition-colors duration-500 text-slate-50'>Snake game-js</h3>
              <p className='m-2'>Snake game built using only vanilla javascript,
              currently not working on mobile devices </p>
              <div className="flex items-center flex-wrap -m-3 pt-5">
                  <a
                    href={'https://snake-01.herokuapp.com/'}
                    className="flex items-center  py-1 px-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* <Image
                      src="/static/icons/link.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    /> */}
                    <FaLink />
                    <span className="underline ml-2  text-lightText  transition-colors duration-500">
                    https://snake-01.herokuapp.com
                    </span>
                  </a>

                
                  <a
                    href={`https://github.com/MonzerIdris/snake-game-js`}
                    className="flex items-center py-1 px-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* <Image
                      src="/static/icons/github.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    /> */}
                    <FaGithub />
                    <span className=" underline ml-2  text-lightText  transition-colors duration-500">
                    https://github.com/MonzerIdris/snake-game-js
                    </span>
                  </a>
                  </div>
                  </div>
{/* Container */}
        {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'> */}

            {/* Grid Item */}
          {/* <div
            // style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          > */}
            {/* Hover Effects */}
            {/* <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                clothes e-commerce
              </span>
              <div className='pt-8 text-center'>
                <a target={"_blank"} href='https://eshopp-heroku.herokuapp.com'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a target={'_blank'} href='https://github.com/MonzerIdris/E-commerce/tree/main'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            // style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          > */}
            {/* Hover Effects */}
            {/* <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}
            {/* Grid Item */}
          {/* <div
            // style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          > */}
            {/* Hover Effects */}
            {/* <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            // style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          > */}
            {/* Hover Effects */}
            {/* <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}
            {/* Grid Item */}
          {/* <div
            // style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          > */}
            {/* Hover Effects */}
            {/* <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            // style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          > */}
            {/* Hover Effects */}
            {/* <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>  
    )
}
