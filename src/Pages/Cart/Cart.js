import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import SmallCard from './SmallCard';
import './Cart.css'
import OrderSummury from './OrderSummury';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import LoadingAnimation from '../../Components/LoadingAnimation/LoadingAnimation';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)


    const { data: orders, isLoading, refetch } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/order?email=${user?.email}`)
            const data = res.json()
            return data

        }
    })



    const handleDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('Order Removed')
                    refetch()


                }
            })
    }



    const handleClearCart = (email) => {
        fetch(`http://localhost:5000/clear?email=${email}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })
    }

    let [orderSum, setorderSum] = useState([])
    const handleCheck = (data) => {
        const exists = orderSum.find(order => order._id === data._id)
        console.log(exists);
        if (exists) {
            const rest = orderSum.filter(oreders => oreders._id !== data._id)
            const setorder = [...rest]
            setorderSum(setorder)
        }
        else {

            const order = [...orderSum, data]
            setorderSum(order)
        }


    }

    console.log(orderSum)

    const [open, setopen] = useState(false)


    console.log(open);









    if (isLoading) {
        return <LoadingAnimation></LoadingAnimation>
    }


    let totalPrice = 0;

    for (let product of orderSum) {
        totalPrice += product.price;
    }
    let totalProducts = orderSum.length;
    let shipping = 20;
    let grandTotal = shipping + totalPrice;

    const handleProccedToPayment = () => {
        const payment = {
            paid: 'false',
            grandTotal,
            buyerEmail: user?.email,
            orders: orderSum,
        }
        fetch('http://localhost:5000/payments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(payment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate(`/payments/${data.insertedId}`)
            })
    }


    return (
        <div className='cart px-4 md:px-20 relative bg-gray-300 '>
            <div className='orders    py-4  '>
                <h1 className='text-center text-2xl mb-4 font-semibold text-gray-800'>Your Orders</h1>
                {
                    orders?.length === 0 ?

                        <div>
                            <p className='text-center h-screen py-10 mb-20'>
                                You Have 0 orders
                            </p>
                        </div>
                        :
                        <>
                            {
                                orders?.map(order => <SmallCard
                                    key={order._id}
                                    order={order}

                                    handleCheck={handleCheck}
                                    handleDelete={handleDelete}
                                ></SmallCard>)
                            }
                        </>

                }
            </div>
            <div className={`text-center absolute top-15 h-screen z-50 md:right-0 ease-linear duration-200  ${open ? `right-0` : ' right-[-500px]'}`}>
                <OrderSummury
                    totalPrice={totalPrice}
                    totalProducts={totalProducts}
                    shipping={shipping}
                    handleProccedToPayment={handleProccedToPayment}
                    handleClearCart={handleClearCart}
                ></OrderSummury>
            </div>
            {
                open &&  <div className='z-10 bg-black md:hidden ease-linear duration-200 opacity-50 h-full w-full absolute top-0 bottom-0 left-0 right-0'>

                </div>
           }
            <div className=' absolute z-50 top-5 left-5'>
                <label onClick={() => setopen(!open)} className="h-6  z-10  rounded-full   w-6 md:hidden swap swap-rotate">





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
    );
};

export default Cart;