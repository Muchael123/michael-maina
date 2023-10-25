'use client'
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

function Dashboard() {
  return (
    <div className='h-[80%] w-full flex flex-col md:flex-row'>
        <motion.div className="flex-1 align-middle gap-5 w-full overflow-hidden h-full flex flex-col justify-center items-center"
        initial = {{x: -600,}}
        animate = {{x: 0, }}
        transition = {{duration: 2}}
        >
            <img src= '/images/maich.jpg' className='object-cover w-[50%] top-20 rounded-lg md:rounded-lg mx-20 md:w-[20em] md:h-[27em]'/>   
            </motion.div>
            <motion.p>
                <h1 className='font-myname text-3xl font-bold text-teal-300'>Hello, I'm <span className='font-brush'>Michael Maina...</span></h1>
            </motion.p>
            
    </div>
    )
}

export default Dashboard