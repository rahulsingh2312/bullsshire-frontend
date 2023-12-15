import Image from 'next/image'
import Logo from './images/biglogo.png'
import {playfairDisplaySC , redRose } from '../font'
import Designright from '../hero/images/b4footer.png'
export default function Pages(){
    return(
        <>

<div className={`${redRose.className}`}>
        <div className='  flex' >
            <div className="md:ml-20  w-9/12 md:w-auto  mt-5" > <Image  src={Logo} alt="logoig" />  </div>
            <div className="hidden md:block flex mt-40   md:justify-center md:text-4xl text-2xl ml-10">
        <div  >

        <div className="mb-2">Your Transaction, Your Terms </div>

        <div className="opacity-50 leading-tight md:text-xl text-sm">Clear, concise, and devoid of complexities
cause Investing should be effortless. </div>
        </div>
        </div>
            <Image src={Designright} className="md:w-96 w-40" alt="art" />
            </div>
        <div className="flex md:hidden mt-10  md:-mt-20 md:justify-center md:text-4xl text-2xl ml-10">
        <div  >

        <div className="mb-2">Your Transaction, Your Terms </div>

        <div className="opacity-50 leading-tight md:text-xl text-sm">Clear, concise, and devoid of complexities
cause Investing should be effortless. </div>
        </div>

</div>
</div>
        </>
    )
}
