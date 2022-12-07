import React from 'react';
import Marquee from "react-fast-marquee";
const TextSlide = () => {
    return (
        <div>
           <Marquee speed='50' className='bg-white font-bold text-4xl text-orange-500 py-4'>We have a new launch in this black friday! Stay Tuned for the launch!</Marquee>
        </div>
    );
};

export default TextSlide;