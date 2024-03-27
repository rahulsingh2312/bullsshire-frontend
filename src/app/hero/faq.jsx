'use client'
import React from "react";
// import img from "next/img";
import Faq from "react-faq-component";
// import Iagfaq from './imgs/faq.svg'

import "./Saq.css"; // Import a separate CSS file for styling

const data = {
    title: "Frequently Asked Questions",
    rows: [
        {
            title: "What does Inverock Wealth do?",
            content: `Inverock Wealth is a SEBI registered Research Analyst that provides data driven stock picks to investors and traders for Intraday trades as well as for long term wealth creation.`,
        },
        {
            title: "What is the minimum amount required for investment?",
            content:
                "You can start your investment with any amount of your choice. ",
        },
        {
            title: "How much fees are charged for the Research reports?",
            content: `Currently, we are not charging anything for the research that we provide, it's FREE. `,
        },
        {
            title: "Does Inverock Wealth have access to my capital?",
            content: <p>Absolutely not. We don't have access to your capital or funds as it remains with you in your Demat account.</p>,
        },
    ],
};

const styles = {
    bgColor: 'black', // Light background color
    titleTextColor: "white", // Blue title text color
    rowTitleColor: "white", // Blue row title color
    rowContentColor: 'white', // Black row content color
    arrowColor: "#007bff", // Blue arrow color
};

const config = {
    animate: true,
    arrowIcon: "|w|", // Customize arrow icon
    tabFocus: true,
};

export default function Saq() {
    return (
        <>
        <div className="faq-container md:flex mt-20 "> {/* Apply additional styling using a CSS class */}
         <img className="md:w-1/2" src='/faq.svg' alt="faq"/>
           <div className="md:mt-40 md:w-1/2 mt-20 md:text-4xl ">
            <Faq 
                data={data}
                styles={styles}
                config={config}
            />
            </div>
          
        </div>
       <div className="flex justify-center" id='support'>
                <img src='/b4footer.png' alt ="desging" />

            </div>
        </>
    );
}
