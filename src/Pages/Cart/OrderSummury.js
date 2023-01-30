import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import './Order.css'
const OrderSummury = ({ totalPrice, totalProducts ,shipping,handleClearCart,handleProccedToPayment}) => {
    const {user} = useContext(AuthContext)
    
    let grandTotal = shipping + totalPrice;

    console.log(totalProducts);
    return (
        <div className='bg-white h-full text-gray-900 font-semibold text-start OrderSummury'>
            <h1 className='bg-orange-500 text-center text-white text-2xl mb-4 font-semibold '>Order Summury</h1>
            <div className='p-2 flex flex-col pr-20'>
                <p className='my-2'>Total Products:{ totalProducts}</p>
                <p className='my-2'>Total Price: $ { totalPrice}</p>
                <p className='my-2'>Shipping Fee: $ {shipping}</p>
                
                <p className='my-2'>Grand Total: $ { grandTotal}</p>
                <button onClick={()=>handleClearCart(user?.email)} type="button" className="px-8 py-3  font-semibold  border border-orange-500   dark:bg-orange-500 dark:text-gray-100 my-2 ">Clear Order</button>
                <button onClick={handleProccedToPayment} type="button" disabled={totalProducts === 0} className={`px-8 py-3  font-semibold   border border-orange-500  my-2 dark:text-orange-500 `}>Confirm Order</button>

            </div>

        </div>
    );
};

export default OrderSummury;