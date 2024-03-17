import React from 'react'

const About = () => {
  return (
    <div class="sm:flex items-center max-w-screen-xl">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png"/>
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            <span class="text-gray-500 border-b-2 border-[#af35ab] uppercase">About us</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-[#af35ab]">Our Company</span>
            </h2>
            <p class="text-white">
            Inverock Wealth is a Quant based Research firm that helps investors to invest in the capital
 markets with the help of its data driven stock picks with favorable risk to reward. Our Long term
 investment philosophy is based on Quant based Buy on Dips strategies where we Buy
 Fundamentally strong stocks on dips for long term
            </p>
        </div>
    </div>
</div>
  )
}

export default About