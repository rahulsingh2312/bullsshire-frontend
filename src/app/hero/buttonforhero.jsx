'use client'
import { inknutAntiqua } from '../font'
// import img from 'next/img'
// import  A from './brokers/a.png'
// import B from './brokers/b.png'
// import C from './brokers/c.png'
// import D from './brokers/d.png'
// import  Imag  from './imgs/img2.png'
import Link from 'next/link'
export default function Buttonforhero() {
    return (
    <div>
        <div className={`${inknutAntiqua.className} flex mt-6 md:mt-16 md:-ml-96 md:justify-center text-xl`}>
     <Link href="/explore" >   <div className="md:w-40 rounded w-32 h-12 text-black flex justify-center items-center ml-6  bg-gray-100" > Explore </div> </Link>
     <Link href="/login" >   <div className="md:w-40 rounded w-32 h-12 ml-2 bg-black flex justify-center items-center border-white border-solid border-2" >  Login</div> </Link>
        </div>
        <div className="ml-5 md:-ml-2 md:flex md:mt-4 md:justify-center"><div className='md:-ml-48 md:mr-7' style={{ height: '100%', color: 'rgba(231.82, 231.63, 231.63, 0.64)', fontSize: 15, fontFamily: 'Lato', fontWeight: '600', lineHeight: 3, letterSpacing: 0.30, wordWrap: 'break-word'}}>supported on India’s largest brokers</div>
<div className='flex'>
    <img className='mx-1' src='/a.png' alt='brokers '/> 
    <img className='mx-1' src='/b.png' alt='brokers '/>
    <img className='mx-1' src='/c.png' alt='brokers '/>
    <img className='mx-1' src='/d.png' alt='brokers '/>
</div>
   </div>
   <div className='ml-5  md:flex md:justify-center md:-ml-48  md:-mt-0' style={{width: '100%', height: '100%'}}><span style={{color: '#8C8796', fontSize: 15, fontFamily: 'Lato', fontWeight: '600', lineHeight: 3, letterSpacing: 0.30, wordWrap: 'break-word'}}>Dont have a broker account?</span><span style={{color: '#6A607D', fontSize: 15, fontFamily: 'Lato', fontWeight: '600', lineHeight: 3, letterSpacing: 0.30, wordWrap: 'break-word'}}> </span><span style={{color: '#CAB0FF', fontSize: 15, fontFamily: 'Lato', fontWeight: '600', lineHeight: 3, letterSpacing: 0.30, wordWrap: 'break-word'}}> &nbsp;Create One!</span></div>
<div className='ml-10 flex justify-center '> <img src='/img2' alt="simple" /> </div>
<div className='flex justify-center md:-mt-10 custom:-mt-72 mb-20 -mt-10 '>
<Link href="/explore" ><div className={`${inknutAntiqua.className} md:w-52 md:h-16 rounded w-32 h-12 text-xl text-black flex justify-center items-center ml-0  bg-gray-100`} > Explore </div></Link>
</div>
        </div>
    )
    }
