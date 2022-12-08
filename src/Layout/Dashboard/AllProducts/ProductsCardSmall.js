import React from 'react';

const ProductsCardSmall = ({ product }) => {
    const {
        category_id,
        rating,
        price,
        title,
        quantity,
        image_url,
        details,

    } = product;
    return (
        <div className='bg-white px-3'>
            <img className='w-60 h-60 mx-auto' src={image_url} alt="" />

            <h1 className='text-xl font-semibold'>{title.slice(0, 25)}..</h1>
            <p className='font-semibold'>Price: ${price}</p>
            <p>
                {
                    details.slice(0, 100)
                }...
            </p>
            <div className='flex px-1  justify-between'>
                <button className='bg-orange-500 px-4 py-1 my-4 font-semibold text-white'>Edit</button>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductsCardSmall;