import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './ProductCard.css'


const ProductCard = ({ product }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const { image_url, _id, price, title
        , details } = product;

    const handleBuyNow = (product) => {
        if (!user) {

            return navigate('/login')
        }
        else {
            const order = {
                id: _id,
                image_url: image_url,
                title: title,
                serviceName: title,
                price: price,
                email: user.email
            }
            fetch(' https://shop-now-server.vercel.app/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
            toast.success('Added to Cart')
        }
    }
    return (
        <div>
            <div style={{ height: '510px' }} className="relative  bg-gray-200 hover:bg-gray-300 border-none hover:border border-orange-500 hover:shadow-2xl  shadow-lg  dark:text-gray-900">
                <div className='cards'>
                <span className="inner" >
                <img src={image_url} alt="" className="object-cover object-center w-full  h-72 bg-gray-400 hover:bg-gray-500" />
                   
                
                </span>
           </div>
                <div className="flex flex-col justify-between  space-y-8">
                    <div className="space-y-2 p-2">
                        <h2 className="text-xl font-bold tracking-wide">{title.slice(0, 30)}</h2>
                        <p className="text-gray-600">{details.slice(0, 100)}...</p>
                        <div className='text-orange-400   absolute bottom-14'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='font-semibold text-gray-900'>Price:${price}</p>
                                </div>
                                <div className='flex ml-36'>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleBuyNow} type="button" className="flex w-full absolute bottom-0 items-center justify-center  p-3 font-semibold tracking-wide  bg-orange-600 dark:text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;