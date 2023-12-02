import Mirrordesign from './mirrordesign.png'
import MirrorLaptopOnly from './mirrrorlaptoponly.png'
import MadeSimple from './madesimplete.png'
import Image from 'next/image'
export default function xtraord() {
    return (
    <div>
        <div className='md:flex'>
    <Image src={Mirrordesign} />
    <div className='hidden md:block'>
        <Image src={MirrorLaptopOnly} />
    </div>
    </div> 
    <Image className='md:-mt-40 -mt-20 md:mx-auto' src={MadeSimple} />
  
    </div>
    )
    }