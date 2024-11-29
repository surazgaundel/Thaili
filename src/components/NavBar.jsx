import React from 'react'
import { links } from '../utils/component'
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { FaRegUserCircle } from "react-icons/fa"

export default function NavBar() {
  return (
    <div className='flex flex-row items-center justify-around shadow-md p-1 rounded-md'>
        <div className='md:w-1/3 text-2xl font-bold'>
            <Link to='/'>
            <img src={Logo} alt='logo' className='h-28 w-28'/></Link>
        </div>
        <div className='md:flex justify-around gap-2 w-[50%] hidden md:text-xs lg:text-xl'>
            {links.map(link=>{
                const {id,name}=link;
                return(
                    <li key={id} className='list-none hover:text-red cursor-pointer hover:underline'>{name}</li>
                )
            })}
        </div>
        <div>
            <Link to='/cart' className='flex items-center gap-1 bg-yellow px-2 py-1 rounded-md hover:bg-blue hover:text-yellow'>Cart<span><AiOutlineShoppingCart/></span></Link>
        </div>
        <div>
            <Link to='/profile' className='flex items-center gap-1 bg-yellow px-2 py-1 rounded-md hover:bg-blue hover:text-yellow'>Profile<span><FaRegUserCircle/></span></Link>
        </div>
    </div>
  )
}
