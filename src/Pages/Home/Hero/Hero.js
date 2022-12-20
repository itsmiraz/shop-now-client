import React from 'react';
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/pagination";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const Hero = () => {
    return (

        <AwesomeSlider className='h-[650px]'>
            <div className='bg-orange-500 gap-10 grid grid-col-1 md:grid-cols-2  w-full h-full md:p-20'>
                <div className='mt-10 p-2 md:p-12 md:text-start text-center'>
                    <h1 className='text-5xl md:text-7xl  text-white font-bold'>Small & Thin<br /> Smart Watch <br />4th Gen</h1>
                    <Link className='flex md:justify-start justify-center' to='/shop'>

                        <button type="button" className="px-8 my-2 py-3 flex items-center justify-between font-semibold  dark:bg-gray-100 dark:text-gray-800">Shop Now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 ml-2 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                        </button>
                    </Link>
                </div>
                <img src="https://htmldemo.net/elehaus/elehaus/assets/images/slider/slider1.png" className='px-10' alt="" />
            </div>
            <div className='bg-black gap-10 grid grid-col-1 md:grid-cols-2 w-full h-full md:p-20'>
                <div className='mt-10 p-2 md:p-12 md:text-start text-center'>
                    <h1 className='text-5xl md:text-7xl  text-white font-bold'>Smart<br /> Products<br />For Your Life</h1>
                    <Link className='flex md:justify-start justify-center' to='/shop'>

                        <button type="button" className="px-8 my-2 py-3 flex items-center justify-between font-semibold  dark:bg-gray-100 dark:text-gray-800">Shop Now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 ml-2 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                        </button>
                    </Link>
                </div>
                <img src="https://htmldemo.net/elehaus/elehaus/assets/images/slider/slider3.png" className='px-10' alt="" />
            </div>
            <div className='bg-red-500 gap-10 grid grid-col-1 md:grid-cols-2 w-full h-full md:p-20'>
                <div className='mt-10 p-2 md:p-10 md:text-start text-center'>
                    <h1 className='text-5xl md:text-7xl  text-white font-bold'>Bang & Olufsen<br /> Smart Speaker</h1>
                    <Link className='flex md:justify-start justify-center' to='/shop'>

                        <button type="button" className="px-8 my-2 py-3 flex items-center justify-between font-semibold  dark:bg-gray-100 dark:text-gray-800">Shop Now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 ml-2 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                        </button>
                    </Link>
                </div>
                <img src="https://htmldemo.net/elehaus/elehaus/assets/images/slider/slider4.png" className='px-10 ' alt="" />
            </div>
        </AwesomeSlider>

        
    );
};

export default Hero;