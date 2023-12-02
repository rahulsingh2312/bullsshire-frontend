'use client'
import { playfair_Display_SC } from "./font"
import { useState } from "react"
import { Sling as Hamburger } from 'hamburger-react'


export default function navbar() {
  const [isOpen, setOpen] = useState(false)
  return (
  <div>
    <nav>
  <div className="flex justify-center mt-20  md:-ml-16 md:text-5xl text-2xl  " >  <div className={`${playfair_Display_SC.className} p-1  `} style={{backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)", WebkitBackgroundClip: 'text', // for Safari
    color: 'transparent',}}> Bullsshire Traders </div > <div className="md:hidden ml-5"> <Hamburger size={20} distance="sm" color="grey" duration={2} toggled={isOpen} toggle={setOpen} /></div>
    </div>
    </nav>
  </div>
  )
}
