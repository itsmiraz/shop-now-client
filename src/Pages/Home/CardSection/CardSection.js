import React from 'react';
import { Link } from 'react-router-dom';
import './CardSection.css'
const CardSection = () => {
    return (
        <div className='grid py-10 bg-white px-4 md:px-20 grid-cols-1 gap-10 md:grid-cols-3'>

            <div className="cards" aria-label="Image description">
                <span className="inner" style={{
                    backgroundImage: `url("https://htmldemo.net/elehaus/elehaus/assets/images/shop/banner/1.jpg")`
                }}>

                    <div className=' p-5  text-white'>
                        <h2 className='text-4xl font-bold'>
                            Get 50% Off
                            <br />
                            Smart Phone
                            <br />
                            With Pen
                        </h2>
                        <Link to='/shop'>
                        <button className='py-4'>
                            SHOP NOW <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>

                        </button>
                        </Link>
                    </div>


                </span>
            </div>








            <div className="cards" aria-label="Image description">
                <span className="inner" style={{
                    backgroundImage: `url("https://htmldemo.net/elehaus/elehaus/assets/images/shop/banner/2.jpg")`
                }}>

                    <div className=' p-5  text-white '>
                        <h2 className='text-4xl font-bold'>
                            Get 50% Off
                            <br />
                            Gaming Pad
                            <br />
                            & Handel
                        </h2>
                        <Link to='/shop'>
                        <button className='py-4'>
                            SHOP NOW <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>

                        </button>
                        </Link>
                    </div>


                </span>
            </div>
            <div className="cards"  aria-label="Image description">
                <span className="inner" style={{
                    backgroundImage: `url("https://htmldemo.net/elehaus/elehaus/assets/images/shop/banner/3.jpg")`
                }}>

                    <div className=' p-5  text-white '>
                        <h2 className='text-4xl font-bold'>
                            Get 50% Off
                            <br />
                            Smart Phone
                            <br />
                            With Pen
                        </h2>
                        <Link to='/shop'>
                        <button className='py-4'>
                            SHOP NOW <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>

                        </button>
                        </Link>
                    </div>


                </span>
            </div>
       









          

           


        </div>
    );
};

export default CardSection;