import React from 'react'
import logo from '../assets/logo.png'
const Navbar = ({reference}) => {
  return (
    <div className='flex justify-between items-center w-full px-[90px] py-5'>
       <img className='w-[85px]' src={logo} alt="logo" /> 
       <ul className='flex gap-10 text-white'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
       </ul>
       <button className='text-white font-bold bg-red-600 py-1.5 px-4 rounded'>Login</button>
    </div>
  )
}

export default Navbar
