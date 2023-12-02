import Image from 'next/image'
import Logo from './LOGO.png'
import { oxygen} from "../font"
import Buttonforhero from './buttonforhero'
import Xtraord from './xtraord.jsx'

export default function hero() {
    return (
        //  
        <div>
    <div  className=' ml-7 md:w-1/4 md:m-auto md:pt-20  mt-20 w-332 h-232'>
        
<Image src={Logo} alt='LOGO' /> </div>
<div className={`${oxygen.className}  md:justify-center leading-6 break-words md:mt-96 ml-4   md:text-2xl text-1xl md:flex text-center hidden`}> "Discover curated portfolios and thematic strategies for financial success. Embrace personalized<br/> investment approaches, watch your wealth grow, and embark on a journey to financial<br/> well-being with us."</div>
 
<div className={`${oxygen.className} flex justify-center leading-6 break-words mt-40 md:mt-96 ml-4   md:text-2xl text-1xl  md:hidden`}> Explore curated portfolios, embrace thematic strategies, and <br/>watch your wealth grow. Your journey to   financial  success begins here.</div>
   <Buttonforhero />
   <Xtraord />
    </div>
    )
    }
