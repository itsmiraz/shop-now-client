import { useQuery } from '@tanstack/react-query';
import Countdown from "react-countdown";

import ProductCard from '../../../Components/ProductCard/ProductCard';
import './FeaturedProducts.css'
const FeaturedProducts = () => {


    const { data: prodcuts, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {

            const res = await fetch('http://localhost:5000/catagory/00')
            const data = await res.json()
            return data
        }
    })
    const Completionist = () => <span>You are good to go!</span>;


    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a complete state
          return <Completionist />;
        } else {
          // Render a countdown
            return (
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                   
                    <div className="flex flex-col">
                        <span className=" font-mono text-5xl">
                            <span style={{ "--value": { hours } }}>{ hours}</span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col">
                        <span className=" font-mono text-5xl">
                            <span style={{ "--value": { minutes } }}>{ minutes}</span>
                        </span>
                        min
                    </div>
                    <div className="flex  flex-col">
                        <span className=" font-mono  text-5xl">
                            <span style={{ "--value": { seconds } }}>{ seconds}</span>
                        </span>
                        sec
                    </div>
                </div>
           
          );
        }
      };

    return (
        <div className='featuredProducts  p-4  md:p-10 bg-gray-300'>
            <div>
                <div className='flex justify-center mt-10'>
                <Countdown date={Date.now() + 600000000} renderer={renderer} />,
                    
                </div>
                <div className='w-full '>
                    <img className='w-full' src="https://img.freepik.com/free-vector/super-sale-horizontal-banner_52683-59532.jpg?w=2000" alt="" />
                </div>
            </div>
            <div>
                <h2 className='text-3xl mb-4 font-semibold text-gray-800 px-5 text-center '>Featured Products!</h2>
                {
                    isLoading ?
                        <>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                                <div className="flex flex-col m-8 rounded shadow-md w-80 h-[400px] animate-pulse">
                                    <div className="h-48 rounded-t dark:bg-gray-700"></div>
                                    <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                                        <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                                        <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                                        <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col m-8 rounded shadow-md w-80 h-[400px] animate-pulse">
                                    <div className="h-48 rounded-t dark:bg-gray-700"></div>
                                    <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                                        <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                                        <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                                        <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col m-8 rounded shadow-md w-80 h-[400px] animate-pulse">
                                    <div className="h-48 rounded-t dark:bg-gray-700"></div>
                                    <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                                        <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                                        <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                                        <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className='grid  gap-5 grid-cols-1 md:grid-cols-3'>

                                {
                                    prodcuts.slice(0, 6).map(product => <ProductCard
                                        key={product._id}
                                        product={product}
                                    ></ProductCard>)
                                }
                            </div>
                        </>
                }

            </div>
        </div>
    );
};

export default FeaturedProducts;