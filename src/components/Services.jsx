import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'API Development',
    description: `Developing and maintaining RESTful APIs using Python(FastAPI),PHP(Laravel,Slim) for various applications using 
    MySQL databases to manage and store data.`,
    link: 'Learn more'
  },
  {
    name: 'Full Stack Web Application',
    description: `Design, develop, and deploy the application using HTML, CSS, JavaScript, and other web technologies along with Laravel
    to create a responsive and user-friendly dashboard that meet the needs of the client.`,
    link: 'Learn more'
  }
];
const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text and Image */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I do</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Backend Web Developer with 1 year experience.</h3>
            <button className='btn btn-sm mb-6'>See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }} className='flex-1'>
            {/* Services list */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white/20 h-[155px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[24px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Services;
