import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const data = useLoaderData();
  const [proccessing, setProccessing] = useState(false);


  const shipping = 20;
  return (
    <div className="  h-screen ">
      {/* {
        proccessing ?
          <>
            <div className="h-screen w-full flex justify-center items-center">
            <BarLoader color="#eb590e" />
           </div>
          </>
          :
          <> */}

      <div className="w-full md:w-[650px] mx-auto my-10 shadow-lg p-5">
        {
          data.orders.map(order => <div
            key={order._id}
          >
            <div className='flex shadow-md relative mb-4 px-4 text-gray-800 font-semibold bg-white  justify-between items-center'>

              <div className='flex items-center'>
                <img className='w-14 rounded-lg' src={order.image_url} alt="" />
                <h1 className='text-gray-800  font-semibold'>{order?.title.slice(0, 20)}</h1>
              </div>

              <div className='flex gap-5 items-center'>
                <div className='font-semibold  text-gray-800 '>

                </div>
                <h1 className='mr-3'>Price:$ {order.price}</h1>
              </div>
            </div>

          </div>)
        }
        <hr />
        <p className="text-end my-4 px-4 font-semibold">Shipping Fee : $ {shipping}</p>
        <hr />
        <p className="text-end my-4 px-4 font-semibold">Total : $ {data.grandTotal}</p>
        <p className="text-semibold">
          Please Pay <strong>${data.grandTotal}</strong> for your Products
        </p>
        <div className="my-4 w-80">
          <Elements stripe={stripePromise}>
            <CheckOutForm
              proccessing={proccessing}
              setProccessing={setProccessing}
              body={data}>
            </CheckOutForm>
          </Elements>
        </div>
      </div>
      {/* </>
      } */}
    </div>
  );
};

export default Payment;
