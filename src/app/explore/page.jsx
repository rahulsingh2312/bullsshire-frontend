import Logo from './images/logo.png'
import Image from 'next/image'
import { AiOutlineStock } from "react-icons/ai";
import {playfairDisplaySC , redRose} from "../font"
import Bottomnav from '../bottomnav/bottomnav.jsx'
import Ideas from './images/ideas.png'
import Star from './images/star.png'
import Link from 'next/link'
import Horn from './images/horn.png'
import Storyi from './images/storyidea.png'
import Storys from './images/storystrat.png'
export default function Explore(){

    return(
        <>
        <div className='  flex' >
            <div className="md:ml-20 w-20 md:w-auto ml-10 mt-10" > <Image  src={Logo} alt="logoig" />  </div>
            <div className={`${playfairDisplaySC.className} md:text-6xl md:mt-20 md:mx-auto hidden md:block `}  >
           Bullsshire Traders
            </div>
<div className={` hidden ${playfairDisplaySC.className} mt-20 mx-auto border w-52 h-16 justify-center md:flex items-center text-2xl`}>
Login
</div>
        </div>

<div>



<div className="flex ml-5 md:ml-0  mt-10  md:w-full w-1/2 md:justify-center ">
<Image src={Ideas} alt="idea" className=" md:h-1/3 md:w-80" />
  <Image src={Star} alt="star" className="md:h-1/3 md:w-80" />
</div>



<div className="md:flex" >
 <div className="border w-60 h-10 m-4  md:h-20 md:mt-40 md:p-4 p-2 ml-40 rounded-lg"> <div className="flex ">NSE <AiOutlineStock /> <div className="md:pl-2 pl-8  md:pt-3 text-xl md:text-2xl"> ₹ 21,171.35</div></div>   </div>
  <div className="border w-60 h-10 md:h-20 m-4 md:mt-40 ml-40 p-2 md:p-4 md:ml-0 rounded-lg"> <div className="flex ">BSE <AiOutlineStock /> <div className="md:pl-2 pl-8  md:pt-3 text-xl md:text-2xl"> ₹ 70,495.04</div></div>   </div>
//  <Image src={Horn} className="m-auto md:mr-40 px-10 md:w-1/4" alt="hotn"/>



</div>


<div className="flex w-1/2 mt-20 md:w-full md:justify-center  ">
<Image src={Storyi} className="mt-20 md:mt-60  " alt="stryide" />
<Image src={Storys} className="mb-20 md:mb-60 " alt="strystrt" />
</div>

</div>


<Bottomnav />








        </>
    )
}
