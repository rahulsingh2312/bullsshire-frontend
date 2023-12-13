'use client'
import React from "react";
import Image from "next/image";
import Faq from "react-faq-component";
import Iagfaq from './faq.svg'
import B4foot from './b4footer.png'
import "./Saq.css"; // Import a separate CSS file for styling

const data = {
    title: "Frequently Asked Questions",
    rows: [
        {
            title: "How does it work?",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "What is Lorem Ipsum?",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Lorem Ipsum dolor sit amet",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "What is the package version",
            content: <p>The current version is 1.2.1</p>,
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
         <Image className="md:w-1/2" src={Iagfaq} alt="faq"/>
           <div className="md:mt-40 md:w-1/2 mt-20 md:text-4xl ">
            <Faq 
                data={data}
                styles={styles}
                config={config}
            />
            </div>
          
        </div>
        <div className="flex justify-center">
                <Image src={B4foot} alt ="desging" />

            </div>
        </>
    );
}
