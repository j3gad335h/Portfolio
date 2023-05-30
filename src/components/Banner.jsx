import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'



const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('left', 0.5)} initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px] text-center'>JEGADEESH <span>N</span></motion.h1>
            <motion.div
              variants={fadeIn('left', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold 
          uppercase leading-[1]'>
              <span className='mr-4 text-white'>Backend Developer proficient in</span>
              <TypeAnimation sequence={[
                'Python',
                1000,
                'PHP',
                1000,
                'Laravel',
                1000,
              ]} speed={40} className='text-accent' wrapper='span' repeat={Infinity} />
            </motion.div>
            <motion.p variants={fadeIn('left', 0.5)} initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }} className='mb-8 mx-auto lg:mx-0'>Motivated and skilled Backend Developer with 1 year
              of experience, excelling in Python and Laravel. Created a full-stack web application using HTML, CSS, JS, and Laravel,
              showcasing a strong understanding of front-end and back-end development.
            </motion.p>
            <motion.div
              variants={fadeIn('left', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
};

export default Banner;
