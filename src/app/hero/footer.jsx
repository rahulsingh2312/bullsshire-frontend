import React from 'react';
// import img from 'next/img';
// import Logo from './imgs/LOGO.png';
import './Footer.css';
import { playfairDisplaySC , oxygen } from '../font'
import {   IoLocationSharp , IoCallOutline , IoMailOutline  , } from "react-icons/io5";
import { FaRedditSquare , FaTelegram,FaTwitter , FaInstagram,FaYoutube} from "react-icons/fa"
// import B4foot from './imgs/b4footer.png'
export default function Footer () {
  return (
<>

<div>
  <div className={`flex justify-center ${oxygen.className} md:text-2xl text-xs`}>
<img className='w-40 md:w-1/5' src='/LOGO.png' alt="inlogo" />
<div className='md:ml-40 ml-5 mt-7 md:mt-20'>
  <div className="flex">
   <IoLocationSharp className='mr-2 mt-1' /> Andheri , India
  </div>
  <div className='md:flex md:my-10 my-4   '> <div className="flex"> <IoCallOutline className='mr-2 mt-1' /> +91 9321441951</div> <div className="flex md:ml-10"><IoMailOutline className='mr-2 mt-1'  /> bullsshiretraders@gmail.com </div></div>
  <div className="flex">
	  social :3
   
     <br/>
	  
	
	  </div>
	  <div className='flex  md:mt-5 mt-3 mb-3 md:mb-5'>
	 < FaInstagram className="md:mr-5 mr-2" />
	  <FaTelegram className="md:mr-5 mr-2"/>
	  <FaTwitter className="md:mr-5 mr-2" />
    <FaRedditSquare className="md:mr-5 mr-2"/>
    <FaYoutube  />
	  </div>
</div>
</div>
<div className='border mt-5'>

</div>

<div className='flex text-sm  my-2'>
<div className={` ${playfairDisplaySC.className} mr-5 md:mx-20 ml-2`}> home </div>
	  <div className={` ${playfairDisplaySC.className} mr-5 md:mr-20`} >help  </div> <div className={` ${playfairDisplaySC.className} `}> support</div>
<div className="ml-auto mr-5"> copyright © Bullsshire 2023 </div>
</div>
</div>
</>
  );
};

