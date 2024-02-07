import Mirrordesign from './images/mirrordesign.png'
import MirrorLaptopOnly from './images/mirrrorlaptoponly.png'
import Bars from './images/bars.png'
import LaptopBars from './images/laptopbars.png'
import Image from 'next/image'
import Between from './images/svgdesign.svg'
import { inknutAntiqua } from '../font'
import Mobile from './images/1meansphone2islaptop1.png'
import Notmoile from './images/1meansphone2islaptop2.png'
import Link from 'next/link'
export default function Xtraord() {
    return (
    <div>
        <div className='md:flex'>
    <Image src={Mirrordesign} alt="i call it art" />
    <div className='hidden md:ml-80  md:block'>
        <Image src={MirrorLaptopOnly} alt="cool af design" />
        
    </div>
    </div> 
    {/* <Image className='  md:mx-auto' alt="bars" width={1200} src={Bars} /> */}
    <Image className='  md:mx-auto' alt="bars" width={1200} src={LaptopBars} />
    
    {/* <div style={{width: '100%', height: '100%', position: 'relative', zIndex: 10}}>
    <div style={{width: 239, height: 2, left: 102.89, top: 239, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.60) 51%, rgba(0, 0, 0, 0) 100%)'}} />
    <div style={{width: 239, height: 2, left: 154.89, top: 239, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.60) 51%, rgba(0, 0, 0, 0) 100%)'}} />
    <div style={{width: 239, height: 2, left: 206.89, top: 239, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.60) 51%, rgba(0, 0, 0, 0) 100%)'}} />
    <div style={{width: 239, height: 2, left: 258.89, top: 239, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.60) 51%, rgba(0, 0, 0, 0) 100%)'}} />
    <div style={{width: 239, height: 2, left: 310.89, top: 239, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.60) 51%, rgba(0, 0, 0, 0) 100%)'}} />
    <div style={{width: 239, height: 2, left: 348.89, top: 239, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.60) 51%, rgba(0, 0, 0, 0) 100%)'}} />
    <div style={{width: 239, height: 2, left: 386.89, top: 239, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.60) 51%, rgba(0, 0, 0, 0) 100%)'}} />
    <div style={{width: 239, height: 2, left: 438.89, top: 239.04, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.60) 51%, rgba(0, 0, 0, 0) 100%)'}} />
    <div style={{width: 541, height: 144, left: 0, top: 81.04, position: 'absolute', textAlign: 'center'}}><span style={{color: '#FFFFFF', fontSize: 32, fontFamily: 'Oxygen', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>Experience the Future of<br/></span><span style={{color: '#CAB0FF', fontSize: 40, fontFamily: 'Oxygen', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>Investing</span></div>
    <div style={{width: 268, height: 44, left: 138, top: 225.08, position: 'absolute', textAlign: 'center', color: '#969696', fontSize: 12, fontFamily: 'Oxygen', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Explore curated portfolios, embrace thematic strategies, and watch your wealth grow. </div>
</div> */}

  <div className={`${inknutAntiqua.className} flex mt-6 md:mt-16  justify-center  `}>
  <Link href="/explore" >     <div className="md:w-40 rounded w-24 h-12 text-black flex justify-center items-center ml-6  bg-gray-100" > Explore </div></Link>
        <Image width={"50"} src={Between} alt="design u not missin on anythin" />
        <Link href="/login" >       <div className="md:w-40 rounded w-24 h-12  bg-black flex justify-center items-center border-white border-solid border-2" >  Login</div></Link>
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