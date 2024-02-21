'use client'
// import img from 'next/img'
// import Logo from './imgs/biglogo.png'
import {playfairDisplaySC , redRose } from '../font'
// import Designright from '../hero/imgs/b4footer.png'
import Bottomnav from '../bottomnav/bottomnav'
import { useState } from 'react'


const buttonsData = [
    { id: 'all', label: 'All', left: 0, background: 'rgba(198.07, 105.19, 255, 0.09)' },
    { id: 'medium', label: 'Medium', left: 131, background: 'rgba(198.07, 105.19, 255, 0.09)' },
    { id: 'short', label: 'Short', left: 265, background: 'rgba(198.07, 105.19, 255, 0.09)' },
  ];
  

export default function Pages(){
    const [selectedButton, setSelectedButton] = useState('all');

    const handleButtonClick = (button) => {
      setSelectedButton(button);
    };
    return(
        <>

<div className={`${redRose.className}`}>
        <div className='  flex' >
            <div className="md:ml-20  w-9/12 md:w-auto  mt-5" > <img  src='/biglogo.png' alt="logoig" />  </div>
            <div className="hidden md:flex mt-40   md:justify-center md:text-4xl text-2xl ml-10">
        <div  >

        <div className="mb-2">Your Transaction, Your Terms </div>

        <div className="opacity-50 leading-tight md:text-xl text-sm">Clear, concise, and devoid of complexities
cause Investing should be effortless. </div>
        </div>
        </div>
            <img src='/b4footer.png' className="md:w-96 w-40" alt="art" />
            </div>
        <div className="flex md:hidden mt-10  md:-mt-20 md:justify-center md:text-4xl text-2xl ml-10">
        <div  >

        <div className="mb-2">Your Transaction, Your Terms </div>

        <div className="opacity-50 leading-tight md:text-xl text-sm">Clear, concise, and devoid of complexities
cause Investing should be effortless. </div>
        </div>

</div>
</div>

<div className='mt-10 ml-5 flex justify-center' style={{ width: '100%', height: '100%', position: 'relative' }}>
        {buttonsData.map((button) => (
          <div
            key={button.id}
            onClick={() => handleButtonClick(button.id)}
            style={{
              width: 116,
              height: 36,
              position: 'absolute',
              background: button.background,
              boxShadow: '46px 46px 40px rgba(0, 0, 0, 0.25)',
              borderRadius: 7,
              border: `1px ${selectedButton === button.id ? '#BEFFC1' : 'white'} solid`,
              backdropFilter: 'blur(50px)',
              left: button.left,
            }}
          >
            <div style={{ color: 'white', fontSize: 16, fontFamily: 'Red Rose', fontWeight: '400', wordWrap: 'break-word' }}>{button.label}</div>
          </div>
        ))}
      </div>

<div className='md:hidden'>
<Bottomnav active={'ideas'} /></div>
        </>
    )
}
