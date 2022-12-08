import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import LoadingAnimation from '../../../Components/LoadingAnimation/LoadingAnimation';

const AllProductsCatagory = () => {
    const { data: catagories, isLoading } = useQuery({
        queryKey: ['catagory'],
        queryFn: async () => {
            const res = await fetch(` https://shop-now-server.vercel.app/catagory`)
            const data = await res.json()
            return data
        }
    })


    if (isLoading) {
        return <LoadingAnimation></LoadingAnimation>
    }
    return (
        <div className='w-full h-screen  px-20 bg-gray-200'>
            <h1 className='text-xl text-center font-semibold my-4'>All Products</h1>
            <div className='grid grid-cols-2 mb-20 gap-10 md:grid-cols-3'>
                {
                    catagories.map(catagory => <div className='flex bg-white pb-2 translate-y-0 shadow-lg hover:-translate-y-4 ease-in duration-300 flex-col justify-center text-center items-center gap-3'>
                        <Link to={`/dashboard/products/${catagory.id}`}>

                            <img className='rounded-full w-24 mx-auto h-24 '  src={catagory.img} alt="" />



                            <p className="font-bold text-center text-2xl ">{catagory.name}</p>
                        </Link>



                    </div>)
                }
            </div>
        </div>
    );
};

export default AllProductsCatagory;