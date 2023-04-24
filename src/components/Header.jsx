import React from 'react';
//Images
import Logo from '../assets/logo-2.png';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href="#">
            <img src={Logo} alt="" width={125} />
          </a>
          <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <span className='text-gradient btn-link'>Contact Me</span>
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
                <FaGithub />
              </a>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
};

export default Header;
