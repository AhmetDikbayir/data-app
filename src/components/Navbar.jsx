import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 text-white bg-slate-500'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] px-3'>DATA JAR.</h1>
        <ul className='hidden md:flex mr-20'>
            <li className='p-4 cursor-pointer hover:bg-[#00df9a] hover:shadow-xl rounded-lg'>Home</li>
            <li className='p-4 cursor-pointer hover:bg-[#00df9a] hover:shadow-xl rounded-lg'>Company</li>
            <li className='p-4 cursor-pointer hover:bg-[#00df9a] hover:shadow-xl rounded-lg'>Resources</li>
            <li className='p-4 cursor-pointer hover:bg-[#00df9a] hover:shadow-xl rounded-lg'>About</li>
            <li className='p-4 cursor-pointer hover:bg-[#00df9a] hover:shadow-xl rounded-lg'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size= {20}/> }
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-700' : 'fixed left-[-100%]'}>
        <h1 className='w-full m-4 text-3xl font-bold text-[#00df9a]'>REACT.</h1>
          <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar;