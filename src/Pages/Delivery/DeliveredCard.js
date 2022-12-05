import React from 'react';

const DeliveredCard = ({order}) => {
    const { image_url, title, price, _id } = order;

    return (
        <div>
           <div className='flex shadow-md relative mb-4 px-8 text-gray-800 font-semibold bg-white  justify-between items-center'>
           
            <div className='flex items-center'>
                <img className='w-14 md:w-32 rounded-lg' src={image_url} alt="" />
                <h1 className='text-gray-800 text-sm md:text-2xl font-semibold'>{title.slice(0, 30)}</h1>
                </div>
               
            <div className='flex gap-5 items-center'>
            <div className='font-semibold  text-gray-800 '>
                    <p>Paid</p>
                </div>
                <h1 className='mr-3'>Price:$ {price}</h1>
            </div>
        </div>  
        </div>
    );
};

export default DeliveredCard;