import React from 'react';
//Icons
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase } from 'react-icons/bs'
//Link
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/* Nav Inner */}
        <div className='w-full bg-black/20 opacity-40 hover:opacity-100 h-[60px] backdrop-blur-2xl rounded-full max-w-[350px] 
        mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          <Link to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
            <BiHomeAlt />
          </Link>
          <Link to='about'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
            <BiUser />
          </Link >
          <Link to='services'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
            <BsClipboardData />
          </Link>
          <Link to='work'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center'>
            <BsBriefcase />
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
