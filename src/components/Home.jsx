import React from 'react'
import Typical from 'react-typical'
import {HiArrowNarrowRight, HiOutlineArrowNarrowRight} from "react-icons/hi" 
import { Link } from 'react-scroll'
import useStartAnimation from '../animations/useStartAnimation';
import content from '../content';

export default function Home() {
    const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
    const styleTranslate = 'translate-y-10 opacity-0';
    const animated = useStartAnimation();
  
    
    return (
    <div name='home' className='w-full h-screen bg-[#091C29]'>
        {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center align-baseline h-full '>
        <h2
            className={`text-4xl md:text-5xl lg:text-6xl text-white font-bold  `}
          >
            {/* {content.header.text[0]} */}
            Hi!
            <br />
            {/* {content.header.text[1]} */}
            My Name Is Monzer Idris
          </h2>
          <h1
            className={`text-2xl md:text-4xl text-gray-400`}
          >
            {/* {content.header.text[2]} */}
            I am {' '}
            <Typical
              steps={[
                'Front-end developer. 🖥',
                2000,
                'Back-end developer.',
                2000,
                'Full-stack Developer.',
                2000,
              ]}
              className="inline-block"
              loop={Infinity}
              wrapper="p"
            />
          </h1>
        <div>
        <Link to='about' smooth={true} duration={500}>

          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiOutlineArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </Link>
        </div>
      </div>
    </div>
  )
}
