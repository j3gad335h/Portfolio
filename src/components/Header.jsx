import React from 'react';
//Images
import Logo from '../assets/logo-2.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href="/">
            <img src={Logo} alt="" width={125} />
          </a>
          <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <span className='text-gradient btn-link'>Contact Me</span>
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="https://www.linkedin.com/in/jegadeeshn/" target='_blank'>
                <FaLinkedin />
              </a>
              <a href="https://github.com/j3gad335h" target='_blank'>
                <FaGithub />
              </a>
              <a href="mailto:ntjegadeesh@gmail.com" target='_blank'>
                <GrMail />
              </a>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
};

export default Header;
