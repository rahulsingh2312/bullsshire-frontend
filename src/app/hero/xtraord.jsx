
'use client'
import { inknutAntiqua } from '../font'
import Link from 'next/link'
export default function Xtraord() {
    return (
    <div>
 
        <div className='md:flex'>
    <img src='/mirrordesign.png' alt="i call it art" />
    <div className='hidden md:ml-80  md:block'>
        <img src='/mirrrorlaptoponly.png' alt="cool af design" />
        
    </div>
    </div> 
    <img className='  md:mx-auto' alt="bars" width={1200} src='/laptopbars.png' />
    <div className={`${inknutAntiqua.className} flex justify-center  `}>
  <Link className=' z-50 ' href="/explore" >     <div className="md:w-40 rounded  z-50  w-24 h-12 text-black flex justify-center items-center ml-6  bg-gray-100" > Explore </div></Link>
     <img width={"50"} src='/svgdesign.svg' alt="design u not missin on anythin" />
        <Link className=' z-50 ' href="/dashboard" >       <div className="md:w-40  z-50  rounded w-24 h-12  bg-black flex justify-center items-center border-white border-solid border-2" >  Login</div></Link>
        {/* </div> */}
</div>
{/* <div className='flex justify-center'> */}
  
        <div className='flex mt-10 justify-center  md:hidden'>
        <img src='/1meansphone2islaptop1.png' alt="duh" />
    </div>
   <div className='hidden md:flex md:-mt-60 justify-center  '>
        <img src='/1meansphone2islaptop2.png' alt="duh" />
    </div>
    </div>
    )
    }