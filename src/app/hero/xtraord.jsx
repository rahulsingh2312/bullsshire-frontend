import Mirrordesign from './images/mirrordesign.png'
import MirrorLaptopOnly from './images/mirrrorlaptoponly.png'
import Bars from './images/bars.png'
import Image from 'next/image'
import Between from './images/svgdesign.svg'
import { inknutAntiqua } from '../font'
import Mobile from './images/1meansphone2islaptop1.png'
import Notmoile from './images/1meansphone2islaptop2.png'
export default function Xtraord() {
    return (
    <div>
        <div className='md:flex'>
    <Image src={Mirrordesign} alt="i call it art" />
    <div className='hidden md:ml-80  md:block'>
        <Image src={MirrorLaptopOnly} alt="cool af design" />
    </div>
    </div> 
    <Image className='  md:mx-auto' alt="bars" width={1200} src={Bars} />
  

  <div className={`${inknutAntiqua.className} flex mt-6 md:mt-16  justify-center  `}>
        <div className="md:w-40 rounded w-24 h-12 text-black flex justify-center items-center ml-6  bg-gray-100" > Explore </div>
        <Image width={"50"} src={Between} alt="design u not missin on anythin" />
        <div className="md:w-40 rounded w-24 h-12  bg-black flex justify-center items-center border-white border-solid border-2" >  Login</div>
        </div>

        <div className='flex mt-10 justify-center  md:hidden'>
        <Image src={Mobile} alt="duh" />
    </div>
   <div className='hidden md:flex md:-mt-60 justify-center  '>
        <Image src={Notmoile} alt="duh" />
    </div>
    </div>
    )
    }