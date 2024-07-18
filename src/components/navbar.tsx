import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import icon from '../assets/logo.png';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="navbar sticky top-0 z-50 bg-gradient-to-r py-3 from-indigo-500 to-indigo-800 bg-base-100 rounded flex justify-between items-center px-20 border-b-2 border-gray-500">
      <div className="flex-1">
        <img className='w-30 h-20 cursor-pointer' src={icon} alt="Logo" onClick={scrollToTop} />
      </div>
      <div className="flex-none flex space-x-4">
        <ScrollLink
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="btn btn-ghost text-white font-poppins"
        >
          HOME
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="journey"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="btn btn-ghost text-white font-poppins"
        >
          JOURNEY
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="crud"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="btn btn-ghost text-white font-poppins"
        >
          JOIN
        </ScrollLink>
      </div>
    </div>
  );
};

export default Navbar;