import React from 'react'
import shoe from '../assets/shoe.png'
import { SiFlipkart } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { motion } from "framer-motion"

const Hero = ({reference}) => {
  return (
    <div className='flex'>
      <div className='w-[50%] px-[90px] py-[70px] h-[calc(744px-76px)]'>
        <h1 className='uppercase text-8xl font-extrabold'>your feet deserve the best</h1>
        <p className='uppercase mt-5 text-zinc-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium voluptas tempora tenetur rem explicabo nostrum, odit quibusdam consequuntur esse obcaecati cumque, inventore alias. Aliquam nam ducimus consequuntur porro neque!</p>
        <div className='mt-5 flex gap-4'>
            <button className='capitalize font-bold bg-red-600 px-4 py-2'>shop now</button>
            <button className='capitalize font-bold transparent border px-4 py-2'>category</button>
        </div>
        <p className='capitalize mt-5 text-zinc-600'>also available on</p>
        <div className='mt-4 flex gap-4'>
            <SiFlipkart size={25} />
            <FaAmazon size={28} />
        </div>
      </div>
      <div className='w-[50%] flex items-center justify-center'>
        <motion.img drag dragConstraints={reference} src={shoe} alt="shoes" />
      </div>
    </div>
  )
}

export default Hero
