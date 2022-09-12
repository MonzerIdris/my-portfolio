import React from 'react'

export default function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#091C29] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='max-w-[1000px] w-full flex justify-start align-middle px-4'>
        {/* <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'> */}
          <div className=' pb-8 pl-4'>
            <p className='text-3xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[400px] w-full flex justify-center align-middle px-4'>
            {/* <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm monzer, nice to meet you. Please take a look around.</p>
            </div> */}
            <div className='sm:text-left text-xl pb-8 pl-4'>
              <p>I am passionate about building web applications that improves
              the lives of those around me. I specialize mern stack development What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>  )
}
