import React from 'react'
import shoe from '../assets/shoe.png'
import { SiFlipkart } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { motion } from "framer-motion"
import { HiRefresh } from "react-icons/hi";

const Hero = ({reference}) => {

  const refresh = () => {
    window.location.reload();
  }

  return (
    <div className='flex'>
      <div className='w-[50%] px-[90px] py-[70px] h-[calc(744px-83px)]'>
        <motion.h1 drag dragConstraints={reference} className='uppercase text-8xl font-extrabold'>your feet deserve the best</motion.h1>
        <motion.p drag dragConstraints={reference} className='uppercase mt-5 text-zinc-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium voluptas tempora tenetur rem explicabo nostrum, odit quibusdam consequuntur esse obcaecati cumque, inventore alias. Aliquam nam ducimus consequuntur porro neque!</motion.p>
        <div className='mt-5 flex gap-4'>
            <motion.button drag dragConstraints={reference} className='capitalize font-bold bg-red-600 px-4 py-2'>shop now</motion.button>
            <motion.button drag dragConstraints={reference} className='capitalize font-bold transparent border px-4 py-2'>category</motion.button>
        </div>
        <motion.p drag dragConstraints={reference} className='capitalize mt-5 text-zinc-600'>also available on</motion.p>
        <motion.div drag dragConstraints={reference} className='mt-4 flex gap-4'>
            <SiFlipkart size={25} />
            <FaAmazon size={28} />
        </motion.div>
      </div>
      <div className='w-[50%] flex items-center justify-center'>
        <motion.img drag dragConstraints={reference} src={shoe} alt="shoes" />
        <div onClick={refresh} className='cursor-pointer absolute bottom-5 right-10 bg-red-500 p-3 rounded-full'>
            <HiRefresh size={20}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
