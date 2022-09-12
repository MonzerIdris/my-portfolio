import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'

export default function Projects() {
  return (
<div name='projects' className='w-full md:h-screen text-gray-300 bg-[#091C29]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            My Projects
          </p>
          <p className='py-6'>{' '} Check out some of my recent work</p>
        </div>
        <div className='mt-8'>

        <div
              className="p-6 border border-lightText rounded-xl mb-4"
            >
              <h3 className='text-xl font-bold transition-colors duration-500'>Small e-commerce</h3>
              <p className='m-2'>A mern-stack e-commerce Website with a landing a page auth using jwt products and cart pages </p>
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
                    <FaLink />
                    <span className="ml-2  text-lightText  transition-colors duration-500">
                    https://eshopp-heroku.herokuapp.com
                    </span>
                  </a>

                
                  <a
                    href={`https://github.com/MonzerIdris/E-commerce/tree/main`}
                    className="underline flex items-center py-1 px-2"
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
            >
              <h3 className='text-xl font-bold transition-colors duration-500'>Netflix clone</h3>
              <p className='m-2'>A netflix i did a while ago, Built with html css scss and font-awesome icons </p>
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
                    <FaLink />
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
            >
              <h3 className='text-xl font-bold transition-colors duration-500'>Snake game-js</h3>
              <p className='m-2'>Old snake game built using only vanilla javascript,
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
