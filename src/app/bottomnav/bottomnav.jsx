'use client'
import { useState , useEffect } from 'react';
import { RiHomeLine } from "react-icons/ri";
import { GiDeathZone } from "react-icons/gi";
import { LiaHorseHeadSolid } from "react-icons/lia";
import { GiEgyptianProfile } from "react-icons/gi";
import Link from 'next/link';
const NavBar = (active) => {
  const [activeLink, setActiveLink] = useState(active.active)
  useEffect(() => {
    setActiveLink(active.active);
    console.log("hi"+active.active);
    console.log(activeLink)
  }, [active]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='fixed bottom-0 w-full z-10'>
   {activeLink && <nav className="bg-black p-6  flex justify-between">
      <Link
        href="/explore"
        onClick={() => handleLinkClick('home')}
        className={` hover:text-blue-500 ${activeLink == 'home' ? 'text-blue-500' : ''}`}
      >
    <div className='flex'>   <RiHomeLine  className='mt-1 mr-1'/> <div className='bg-black'>Home </div></div>
      </Link>
      <Link
        href="/ideas"
        onClick={() => handleLinkClick('ideas')}
        className={` hover:text-blue-500 ${activeLink == 'ideas' ? 'text-blue-500' : ''}`}
      >
       <div className='flex'>   <GiDeathZone  className='mt-1 mr-1'/> <div className=''>Ideas </div></div>
      </Link>
      <Link
        href="/strategies"
        onClick={() => handleLinkClick('strategies')}
        className={` hover:text-blue-500 ${activeLink == 'strategies' ? 'text-blue-500' : ''}`}
      >
       <div className='flex'>   < LiaHorseHeadSolid  className='mt-1 mr-1'/> <div className=''>Strategies </div></div>

      </Link>
      <Link
        href="/dashboard"
        onClick={() => handleLinkClick('profile')}
        className={` hover:text-blue-500 ${activeLink == 'profile' ? 'text-blue-500' : ''}`}
      >
      <div className='flex'>   <GiEgyptianProfile className='mt-1 mr-1'/> <div className=''>Profile </div></div>
      </Link>
    </nav> }
    </div>
  );
};

export default NavBar;

