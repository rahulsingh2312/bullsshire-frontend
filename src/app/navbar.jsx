'use client'
import { playfairDisplaySC } from "./font"
import { useState } from "react"
import Link from "next/link"
import { Sling as Hamburger } from 'hamburger-react'
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
       <div className="flex justify-center md:mt-20 mt-10  md:-ml-16 md:text-5xl text-2xl  " >  <div className={`${playfairDisplaySC.className} p-1  `} style={{backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)", WebkitBackgroundClip: 'text', // for Safari
    color: 'transparent',}}> Bullsshire Traders </div > <div className="md:hidden ml-5">
       <Hamburger size={20} distance="sm" color="grey" duration={2} toggled={isOpen} toggle={setOpen} /></div>

    </div>	 
      {/* Apply motion.div for the entire screen to enable animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }} // Change opacity based on isOpen state
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 backdrop-filter backdrop-blur-lg z-50"
        style={{ pointerEvents: isOpen ? 'auto' : 'none', display: isOpen ? 'block' : 'none' }}
        onClick={() => setOpen(false)} // Close navbar when clicked outside
      >
        <div className="flex justify-center md:mt-20 mt-10  md:-ml-16 md:text-5xl text-2xl  " >  <div className={`${playfairDisplaySC.className} p-1  `} style={{backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)", WebkitBackgroundClip: 'text', // for Safari
    color: 'transparent',}}> Bullsshire Traders </div > <div className="md:hidden ml-5">
       <Hamburger size={20} distance="sm" color="grey" duration={2} toggled={isOpen} toggle={setOpen} /></div>

    </div>	 

        {/* Navigation Links */}
        <div className="text-white text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
       <Link href="/dashboard"  > <div className="pb-5">Portfolio</div> </Link>
        <Link href="/strategies" > <div className="pb-5">Strategies</div> </Link>
        <Link href="/ideas"  ><div className="pb-5">Ideas</div> </Link>
        <Link href="#aboutus" >   <div className="pb-5">About Us</div> </Link>
        <Link href="#support" >     <div className="pb-5">Support</div> </Link>
        </div>
      </motion.div>

      {/* Navbar toggle button */}
      
    </div>
  );
}

