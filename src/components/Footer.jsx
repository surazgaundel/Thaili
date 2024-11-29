import React from 'react';
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';
export default function Footer() {
  return (
    <div className="bg-blue text-yellow flex items-center justify-around h-[25vh] text-sm md:text-base">
        <div className='md:w-1/3 text-2xl font-semibold'>
        <Link to='/'>
        <img src={Logo} alt='logo' className='h-28 w-28'/></Link>
        </div>
        <div className='flex gap-1 items-center'>
            <span><AiOutlineCopyrightCircle/></span>
            <p>All rights reserved.</p>
        </div>
    </div>
  )
}
