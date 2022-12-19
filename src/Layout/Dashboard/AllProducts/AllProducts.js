import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCardSmall from './ProductsCardSmall';

const AllProducts = () => {
    const data = useLoaderData()
    return (
        <div className='w-full px-4 md:px-16  bg-gray-200'>
            <h1 className='text-xl text-center font-semibold my-4'>All Products</h1>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-3'>
            {
                    data.map(product => <ProductsCardSmall
                        key={product._id}
                        product={product}
                    ></ProductsCardSmall>) 
            }
            </div>
        </div>
    );
};

export default AllProducts;