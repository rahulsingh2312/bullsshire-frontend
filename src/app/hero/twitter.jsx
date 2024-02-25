// 'use client'
import { oxygen } from '../font'
import { FaXTwitter  } from "react-icons/fa6"
import { FaRegUser } from "react-icons/fa"
// import { useState, useEffect } from 'react';

// import User from './Male User.png'
import Dta from './data.json'
export default function Twitter(){
  const renderCards = (startIndex, endIndex) => {
    return Dta.slice(startIndex, endIndex).map((item) => (
      <div key={item.id} className={`card ${item.id % 5 === 0 ? 'new-line ' : ''}`}>
        <div className="card-content">
          {/* Render the content based on the item */}
          <div className="user-info">
            <div className="user-img justify-center" >
              {/* <FaRegUser size={20}/> */}
              <img className='w-10 rounded-full ' src={item.image} alt="user" />
            </div>
            <div className="ml-2 username">{item.username}</div>
          <FaXTwitter size={40}/>
          </div>
          <div className="content">{item.content}</div>
          <div className="timestamp">{item.timestamp}</div>
        </div>
      </div>
    ));
  };
    return(
        <div className='md:-mt-60'  id='aboutus'>
     <div className={`${oxygen.className} ml-10 mt-20 opacity-50 md:text-4xl  text-xl `}>
     Dont take our word for it 
     </div>
     <div className={`${oxygen.className} md:ml-10 ml-10 md:mt-10 mt-4 mb-20 md:text-6xl  text-4xl `}>
     See what other investors are saying
     </div>




{/* <div>

<div style={{width: '100%', height: '100%', position: 'relative'}}>

    <div style={{width: 489, height: 306, left: 24, top: 36, position: 'absolute', background: 'rgba(198.07, 105.19, 255, 0.05)', boxShadow: '46px 46px 40px rgba(0, 0, 0, 0.25)', borderRadius: 8, border: '3px #FFE7E7 solid', backdropFilter: 'blur(50px)'}}></div>
    <div style={{width: 485, height: 306, left: 24, top: 50, position: 'absolute', background: '#343434'}} />
    <img style={{width: 67, height: 76, left: 40, top: 80, position: 'absolute'}} src={User} />
    <img style={{width: 63, height: 63, left: 346, top: 36, position: 'absolute'}} src={X} />
    <div style={{width: 208, height: 30, left: 126, top: 99, position: 'absolute', color: 'white', fontSize: 21, fontFamily: 'Oxygen', fontWeight: '400', wordWrap: 'break-word'}}>USERNAME</div>
    <div style={{width: 208, height: 30, left: 126, top: 129, position: 'absolute', color: 'white', fontSize: 15, fontFamily: 'Oxygen', fontWeight: '400', wordWrap: 'break-word'}}>@username</div>
    <div style={{width: 336, height: 83, left: 59, top: 175, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Oxygen', fontWeight: '400', wordWrap: 'break-word'}}>I love Bullsshire Traders so much : ) <br/>best trading platform .</div>
    <div style={{width: 266, height: 40, left: 40, top: 276, position: 'absolute', color: 'rgba(255, 255, 255, 0.54)', fontSize: 15, fontFamily: 'Oxygen', fontWeight: '400', wordWrap: 'break-word'}}>9:00 AM . 4 DEC 2023</div>
  
    </div>
</div> */}

<div className="scrollable-container">
        {renderCards(0, 9)}
      </div>

      <div className="scrollable-container">
        {renderCards(10,18 )}
      </div>
      <div className="scrollable-container">
        {renderCards(19,27 )}
      </div>
      <div className="scrollable-container">
        {renderCards(27,35 )}
      </div>

      <div style={{width: '100%', height: '100%', background: 'rgba(255, 132, 252, 0.30)', boxShadow: '200px 200px 200px ', filter: 'blur(200px)'}}></div>


        </div>
    )
}