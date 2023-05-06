import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <section className='section' id="about" ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-fit'>
          {/* Img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }} className='flex-1 lg:bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
          {/* Text */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>About Me.</h2>
            <h3 className='h3 mb-4'>Backend Web Developer with 1 year experience.</h3>
            <p className='mb-6'>I am a highly motivated and passionate developer with a keen interest in developing software that solves real-world problems.
              My goal is to build high-quality software that is not only reliable and scalable but also user-friendly. I am a quick learner and always willing to take on new challenges.
              I enjoy working in a team environment and believe in open communication and collaboration. In my free time,
              I enjoy coding personal projects, playing video games, and watching movies.</p>
            {/* Stats */}
            <div className='flex gap-x-6 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ? <CountUp start={0} end={1} duration={5} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Years of <br /> Experience</div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ? <CountUp start={0} end={17} duration={5} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Projects<br /> Completed</div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default About;
