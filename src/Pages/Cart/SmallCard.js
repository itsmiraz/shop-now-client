import React from 'react';

const SmallCard = ({ order, handleDelete ,handleCheck}) => {


    const { image_url, title, price, _id } = order;

    return (
        <div className='flex  flex-col md:flex-row relative mb-4 px-8 text-gray-800 font-semibold bg-white  justify-between items-center'>
            <div className="form-control absolute left-4">
                <label className="cursor-pointer label">
                    <input  onClick={()=>handleCheck(order)} type="checkbox"  className="checkbox checked checkbox-warning" />
                </label>
            </div>
            <div className='flex items-center'>
                <img className='w-20 md:w-32 rounded-lg ml-4' src={image_url} alt="" />
                <h1 className='text-gray-800 text-normal md:text-2xl font-semibold'>{title.slice(0, 30)}</h1>
            </div>
            <div className='flex items-center'>
                {/* <div className='font-semibold  text-gray-800 flex '>
                    <p>Quantity:</p>
                    <input className='w-8 text-gray-900 ml-2 bg-white ' placeholder='1' type="number" />
                </div> */}
                <h1 className='mr-3'>Price:$ {price}</h1>
                <button onClick={() => handleDelete(_id)} type="button" className="md:px-8 px-4 md:py-3 py-1  font-semibold  dark:bg-orange-500 dark:text-gray-100">Cancel</button>
            </div>
        </div>
    );
};

export default SmallCard;