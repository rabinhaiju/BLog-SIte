import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const Route = () => {
    navigate('/');
    setIsOpen(false); // Close the menu after navigating
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='border border-b-2 border-black fixed top-0 w-full bg-white shadow-md z-50'>
      <div className='w-full lg:w-[1200px] mx-auto flex justify-between items-center p-5'>
        <h2
          onClick={Route}
          className='text-2xl sm:text-3xl font-bold hover:border-b-2 border-black cursor-pointer'
        >
          Frontend Blog
        </h2>
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='text-3xl'>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`lg:flex items-center ${isOpen ? 'block' : 'hidden'} lg:flex lg:flex-row gap-4 lg:gap-8 font-bold`}>
          <ul className='flex flex-col lg:flex-row gap-4 lg:gap-8'>
            <li className='hover:border-b-2 border-black'><Link to="/" onClick={Route}>Home</Link></li>
            <li className='hover:border-b-2 border-black'><Link to="/project" onClick={Route}>Project</Link></li>
            <li className='hover:border-b-2 border-black'><Link to="/blog" onClick={Route}>Blog</Link></li>
            <li className='hover:border-b-2 border-black'><Link to="/contact" onClick={Route}>Contact</Link></li>
            <li className='hover:border-b-2 border-black'><Link to="/newsletter" onClick={Route}>Newsletter</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
