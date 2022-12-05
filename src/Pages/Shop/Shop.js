import React from 'react';
import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useState } from 'react';
import { useEffect } from 'react';
const Shop = () => {
    const products = useLoaderData()
    const [open,setOpen] = useState(false)
    
    

  
    const [productCatagory, setProductCatagory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/catagory')
            .then(res => res.json())
            .then(data => {
                setProductCatagory(data)
             
              
           
            })


    }, [])
  

    return (
        <div className='shop relative  bg-white '>
            <div className={`bg-white w-52 h-screen fixed z-50 md:static top-15 ${open ? 'left-0': 'left-[-450px]'} `}>
                <h1 className='text-center bg-orange-500 text-white py-2 mb-3 text-3xl font-bold'>Catagories</h1>
                {
                    productCatagory?.map(single => <Link
                        to={`/shop/${single.id}`}
                        key={single._id}
                    >
                        <h2

                            className='text-xl font-semibold my-2 text-gray-700 text-center'
                        >{single.name}</h2>
                    </Link>)
                }
            </div>
            <div className='bg-gray-200 pt-4'>
                <h1 className='text-center text-gray-900 mb-3 text-2xl my-4 font-bold'>We have { products.length } products in this catagory</h1>
                <div className='grid my-10 px-4  md:px-10 grid-cols-1 md:grid-cols-3 gap-10'>
                    {
                        products?.map(product => <ProductCard
                            key={product._id}
                            product={product}

                        ></ProductCard>)
                    }
                </div>
                {
                open &&  <div className='z-10 bg-black md:hidden ease-linear duration-200 opacity-50 h-full w-full absolute top-0 bottom-0 left-0 right-0'>

                </div>
           }
                <div className=' absolute z-50 top-5 right-5'>
                <label onClick={() => setOpen(!open)} className="h-6  z-10  rounded-full   w-6 md:hidden swap swap-rotate">

                    {!open ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                        </svg>

                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="  w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                        </svg>

                    }

                </label>

            </div>
            </div>
        </div>
    );
};

export default Shop;