
"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="fixed w-full h-[90px] flex items-center justify-between px-4 md:px-8 bg-sky-900 text-white shadow-md z-50">
      <div className="flex items-center">
        
        <img
          className="h-24 sm:h-28 mt-16 ml-4 sm:ml-[30px]"
          src="https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png"
          alt="Logo"
        />
       
        <h1 className="ml-8 hidden sm:block text-lg md:text-xl font-semibold font-[poppins] text-sky-200">
          Tuition Free Education Program on Latest Technologies
        </h1>
       
        <h1 className="ml-8 sm:hidden text-md font-semibold font-[poppins] text-sky-200">
          Tuition Free Program
        </h1>
      </div>

      
      <ul className="hidden md:flex space-x-8 font-[poppins] mr-4 md:mr-[40px] text-base">
        <li><Link href="/" className="hover:text-gray-200 transition-colors">Home</Link></li>
        <li><Link href="/apply" className="hover:text-gray-200 transition-colors">Apply</Link></li>
        <li><Link href="/jobs" className="hover:text-gray-200 transition-colors">Jobs</Link></li>
        <li><Link href="/results" className="hover:text-gray-200 transition-colors">Results</Link></li>
      </ul>

      
      <div className="md:hidden mr-4" onClick={handleNavToggle}>
        {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

     
      <div
        className={`fixed top-0 right-0 h-full w-full bg-sky-800 text-white transition-transform duration-300 transform ${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-40`}
      >
        
        <div className="flex justify-end p-6">
          <AiOutlineClose
            size={24}
            className="text-white cursor-pointer"
            onClick={handleNavToggle}
          />
        </div>

        <div className="flex flex-col items-start mt-4 ml-8 space-y-8 font-[poppins] text-xl">
          <Link href="/" className="hover:text-gray-200" onClick={handleNavToggle}>Home</Link>
          <Link href="/apply" className="hover:text-gray-200" onClick={handleNavToggle}>Apply</Link>
          <Link href="/jobs" className="hover:text-gray-200" onClick={handleNavToggle}>Jobs</Link>
          <Link href="/results" className="hover:text-gray-200" onClick={handleNavToggle}>Results</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
