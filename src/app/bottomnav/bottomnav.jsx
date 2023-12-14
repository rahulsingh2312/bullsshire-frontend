'use client'
import { useState } from 'react';


const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <a
        href="#"
        onClick={() => handleLinkClick('home')}
        className={`text-white hover:bg-blue-500 ${activeLink === 'home' ? 'bg-blue-500' : ''}`}
      >
        Home
      </a>
      <a
        href="#"
        onClick={() => handleLinkClick('about')}
        className={`text-white hover:bg-blue-500 ${activeLink === 'about' ? 'bg-blue-500' : ''}`}
      >
        About
      </a>
      <a
        href="#"
        onClick={() => handleLinkClick('contact')}
        className={`text-white hover:bg-blue-500 ${activeLink === 'contact' ? 'bg-blue-500' : ''}`}
      >
        Contact
      </a>
    </nav>
  );
};

export default NavBar;

