import React from 'react'
import logo from '../assets/logo.png'
import { motion } from "framer-motion"

const Navbar = ({reference}) => {
  return (
    <div className='flex justify-between items-center w-full px-[90px] py-5'>
       <motion.img drag dragConstraints={reference} className='w-[85px]' src={logo} alt="logo" /> 
       <ul className='flex gap-10 text-white'>
        <motion.li drag dragConstraints={reference}>Home</motion.li>
        <motion.li drag dragConstraints={reference}>About</motion.li>
        <motion.li drag dragConstraints={reference}>Contact</motion.li>
        <motion.li drag dragConstraints={reference}>Services</motion.li>
       </ul>
       <motion.button drag dragConstraints={reference} className='text-white font-bold bg-red-600 py-1.5 px-4 rounded'>Login</motion.button>
    </div>
  )
}

export default Navbar
