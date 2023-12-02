import { Inter, Playfair_Display_SC  , Oxygen , Inknut_Antiqua} from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const playfairDisplaySC = Playfair_Display_SC({
  subsets: ['latin'],
  display: 'swap',
  weight:'400'
})

export const oxygen = Oxygen({
  subsets: ['latin'],
  display: 'swap',
  weight:'400'
})

export const inknutAntiqua = Inknut_Antiqua({
  subsets: ['devanagari'],
  display: 'swap',
  weight:'400'
})