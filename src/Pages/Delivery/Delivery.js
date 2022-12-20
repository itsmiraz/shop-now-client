import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import LoadingAnimation from '../../Components/LoadingAnimation/LoadingAnimation';
import { AuthContext } from '../../Context/UserContext';
import DeliveredCard from './DeliveredCard';

const Delivery = () => {

    const { user } = useContext(AuthContext)
    const { data: delivery, isLoading } = useQuery({
        queryKey: ['delivery',],
        queryFn: async () => {
            const res = await fetch(` https://shop-now-server.vercel.app/delivery?email=${user?.email}`)
            const data = await res.json()
            const paid = data.filter(order => order.paid === 'true')
            return paid

        }
    })


    if (isLoading) {
        return <LoadingAnimation></LoadingAnimation>
    }
    console.log(delivery)
    return (
        <div className='mb-20 h-full  w-full'>
            <div className='px-4 md:px-20 overflow-hidden my-10'>
                {
                    delivery.length === 0 ?
                        <div className='h-screen flex items-center justify-center'>
            <h1 className='text-xl text-center font-semibold my-4'>You have any Prodcuts To Delivered</h1>

                        </div>
                        :
                        <>
            <h1 className='text-xl text-center font-semibold my-4'>Ready To Delivered</h1>

                            {
                                delivery.map(deliver => deliver.orders?.map(order => <DeliveredCard

                                    key={order._id}
                                    order={order}
                                ></DeliveredCard>))
                            }
                        </>


                }
            </div>
        </div>
    );
};

export default Delivery;