import React from 'react';
import Image from 'next/image';
import Logo from './LOGO.png';
import './Footer.css';
import { oxygen } from '../font'
import {   IoLocationSharp , IoCallOutline , IoMailOutline  , } from "react-icons/io5";
import { FaRedditSquare , FaTelegram,FaTwitter , FaInstagram} from "react-icons/fa"

export default function Footer () {
  return (
<>
<div>
  <div className={`flex justify-center ${oxygen.className} md:text-2xl text-sm`}>
<Image className='w-40 md:w-1/5' src={Logo} alt="inlogo" />
<div className='md:ml-40 ml-5 mt-7 md:mt-20'>
  <div className="flex">
   <IoLocationSharp /> Andheri , India
  </div>
  <div className='md:flex md:my-10 my-4   '> <div className="flex"> <IoCallOutline /> +91 9321441951</div> <div className="flex md:ml-10"><IoMailOutline /> bullsshiretraders@gmail.com </div></div>
  <div className="flex">
	  social :3
   
     <br/>
	  
	
	  </div>
	  <div className="flex  md:mt-5 mt-3 mb-3 md:mb-5">
	 < FaInstagram className="md:mr-5 mr-2" />
	  <FaTelegram className="md:mr-5 mr-2"/>
	  <FaTwitter className="md:mr-5 mr-2" />
    <FaRedditSquare/>
	  </div>
</div>
</div>
<div className='border mt-5'>

</div>
<div className='flex text-sm  my-2'>
<div className="mr-5 ml-2 md:mx-20"> home </div>
	  <div className="mr-5 md:mr-20" >help  </div> <div> support</div>
<div className="ml-auto mr-5"> copyright © Bullsshire 2023 </div>
</div>
</div>
</>
  );
};

