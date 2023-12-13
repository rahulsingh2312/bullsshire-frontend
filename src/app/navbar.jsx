'use client'
import { playfairDisplaySC } from "./font"
import { useState } from "react"
import { Sling as Hamburger } from 'hamburger-react'
import Wing from './Group 37325.png'
import Image from 'next/image'


export default function Navbar() {
  const [isOpen, setOpen] = useState(false)
  return (
  <div>
    <nav>
  <div className="flex justify-center md:mt-20 mt-10  md:-ml-16 md:text-5xl text-2xl  " >  <div className={`${playfairDisplaySC.className} p-1  `} style={{backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)", WebkitBackgroundClip: 'text', // for Safari
    color: 'transparent',}}> Bullsshire Traders </div > <div className="md:hidden ml-5">
       <Hamburger size={20} distance="sm" color="grey" duration={2} toggled={isOpen} toggle={setOpen} /></div>

    </div>	  
	  { isOpen &&  <div className={`${playfairDisplaySC.className} text-2xl   -right-10 absolute`}> <Image className="" src={Wing} alt="img" />
		 <div
                className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2"
                style={{ textAlign: "left" }}
              > <div className="pb-10">
           Portfolio
		  </div>
		  <div className="pb-10">Strategies</div>
 <div className="pb-10">
           Ideas
		  </div >
		  <div className="pb-10">About Us</div>
		    <div className="pb-10">Support </div></div>
		  </div> }
    </nav>

  </div>
  )
}
