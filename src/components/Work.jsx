import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex-1 flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/*  text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest <br />Work.</h2>
              <p className='max-w-sm mb-16'>My latest projects using modern web technologies such as HTML, Css, Javascript along with FastAPI and Laravel to
                create responsive and user-friendly web applications.</p>
              <button className='btn btn-sm'><a href="https://github.com/j3gad335h/My_Projects" target='_blank'>View all projects</a></button>
            </div>
            {/* Image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
              {/* Pre-Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all
              duration-500 z-50'> <span className='text-gradient'>UI/UX Design</span></div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all
              duration-700 z-50'>
                <span className='text-3x1 text-white'>My Portfolio</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }} className='flex-1 flex flex-col gap-y-10 items-end justify-end'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
              {/* Pre-Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all
              duration-500 z-50'> <span className='text-gradient'>Full Stack Web Application</span></div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all
              duration-700 z-50'>
                <span className='text-3x1 text-white'>SCM Admin Dashboard</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
              {/* Pre-Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all
              duration-500 z-50'> <span className='text-gradient'>API Development</span></div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all
              duration-700 z-50'>
                <span className='text-3x1 text-white'>SCM Customer Dashboard</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Work;
