'use client'
import Link from 'next/link'
import { useState } from 'react'
import Footer from '../hero/footer';
import Bottomnav from '../bottomnav/bottomnav'
import { redRose } from '../font';

const buttonsData = [
    { id: 'all', label: 'All', left: 0, background: 'rgba(198.07, 105.19, 255, 0.09)' },
    { id: 'medium', label: 'Medium', left: 131, background: 'rgba(198.07, 105.19, 255, 0.09)' },
    { id: 'short', label: 'Short', left: 265, background: 'rgba(198.07, 105.19, 255, 0.09)' },
    { id: 'long', label: 'long', left: 399, background: 'rgba(198.07, 105.19, 255, 0.09)' }
];

// Sample array of ideas
const ideas = [
    {
        title: "Idea 1",
        description: "This is the description for Idea 1. It can contain details about the idea and its features."
    },
    {
        title: "Idea 2",
        description: "This is the description for Idea 2. It can contain details about the idea and its features."
    },
    {
        title: "Idea 3",
        description: "This is the description for Idea 3. It can contain details about the idea and its features."
    },
        {
        title: "Idea 1",
        description: "This is the description for Idea 1. It can contain details about the idea and its features."
    },
    {
        title: "Idea 2",
        description: "This is the description for Idea 2. It can contain details about the idea and its features."
    },
    {
        title: "Idea 3",
        description: "This is the description for Idea 3. It can contain details about the idea and its features."
    }
    // Add more ideas as needed
];

export default function Pages() {
    const [selectedButton, setSelectedButton] = useState('short');

    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };

    return (
        <>
            <div className={`${redRose.className}`}>
                {/* Header Section */}
                <div className='  flex' >
                    <div className="md:ml-20  w-9/12 md:w-auto  mt-5" > <img  src='/biglogo.png' alt="logoig" />  </div>
                    <div className="hidden md:flex mt-40   md:justify-center md:text-4xl text-2xl ml-10">
                        <div  >
                            <div className="mb-2">Your Transaction, Your Terms </div>
                            <div className="opacity-50 leading-tight md:text-xl text-sm">Clear, concise, and devoid of complexities cause Investing should be effortless. </div>
                        </div>
                    </div>
                    <img src='/b4footer.png' className="md:w-96 w-40" alt="art" />
                </div>
                <div className="flex md:hidden mt-10  md:-mt-20 md:justify-center md:text-4xl text-2xl ml-10">
                    <div  >
                        <div className="mb-2">Your Transaction, Your Terms </div>
                        <div className="opacity-50 leading-tight md:text-xl text-sm">Clear, concise, and devoid of complexities cause Investing should be effortless. </div>
                    </div>
                </div>
            </div>

            {/* Buttons Section */}
            <div className=' mt-10 ml-5 md:ml-96 z-50 flex justify-center' style={{ width: '100%', height: '100%', position: 'relative' }}>
                {buttonsData.map((button) => (
                    <div
                        key={button.id}
                        onHover={() => handleButtonClick(button.id)}
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
                        <div className="flex justify-center z-50 items-center mt-1" style={{ color: 'white', fontSize: 16, fontFamily: 'Red Rose', fontWeight: '400', wordWrap: 'break-word' }}>{button.label}</div>
                    </div>
                ))}
            </div>

            {/* Idea Cards Section */}
            <div className="ml-5 mr-5 md:ml-44  mt-10 md:w-full w-full flex flex-wrap justify-center">
                {/* Idea Cards */}
                {ideas.map((idea, index) => (
                    <div key={index} className="md:w-1/2   w-full p-4">
                        {/* Card Component */}
                        <div className="bg-white rounded-lg shadow-md p-6 ">
                            <h2 className="text-xl font-bold mb-4">{idea.title}</h2>
                            <p className="text-gray-700">{idea.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Navigation */}
            <div className='md:hidden'>
                <Bottomnav active={'ideas'} />
            </div>
            <div className=" hidden md:flex ml-5 md:ml-0   mt-10  md:w-full w-full md:justify-center ">
<Link href="/ideas" className=" md:h-1/3 md:w-80" ><img src='/ideas.png' alt="idea"  /></Link>
<Link href="/strategies" className=" md:h-1/3 md:w-80" ><img src='/star.png' alt="star" /> </Link>
</div>

            {/* Footer */}
            <div className='hidden md:block'>
                <Footer />
            </div>
        </>
    )
}
