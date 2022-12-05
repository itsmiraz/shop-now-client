import React from 'react';
import { Link } from 'react-router-dom';

const CatagoryCard = ({ cata }) => {
    return (
        <div className='flex translate-y-0 hover:-translate-y-4 ease-in duration-300 flex-col justify-center text-center items-center gap-3'>


            <img className='rounded-full' width={'100px'} src={cata.img} alt="" />

            <Link to={`/shop/${cata.id}`}>

                <p className="font-bold text-center text-2xl text-white">{cata.name}</p>
            </Link>



        </div>
    );
};

export default CatagoryCard;