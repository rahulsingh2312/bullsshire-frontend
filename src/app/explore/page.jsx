import Logo from './images/logo.png'
import Image from 'next/image'
import {playfairDisplaySC} from "../font"
import Ideas from './images/ideas.png'
import Star from './images/star.png'
import Link from 'next/link'
export default function Explore(){
    return(
        <>
        <div className='  flex' >
            <div className="md:ml-20 w-20 md:w-auto ml-10 mt-10" > <Image  src={Logo} alt="logoig" />  </div>
            <div className={`${playfairDisplaySC.className} md:text-6xl md:mt-20 md:ml-96 hidden md:block `}  >
           Bullsshire Traders
            </div>
<div className={` hidden ${playfairDisplaySC.className} mt-20 mx-auto border w-52 h-16 justify-center md:flex items-center text-2xl`}>
Login
</div>
        </div>

<div>



<div className="flex mx-3 md:mx-auto mt-10     w-1/2 ">


<Image src={Ideas } alt= "idea" />
<Image src={Star} alt="startz" />


</div>






</div>









        </>
    )
}
