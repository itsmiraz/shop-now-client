import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const CheckOutForm = ({ body ,setProccessing,proccessing}) => {
 
  const stripe = useStripe();
  const navigate = useNavigate()
  const elements = useElements();

  const [transactionID, setTransactionID] = useState("");
  const [success, setSuccess] = useState("");
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { _id, grandTotal, buyerEmail } = body;
  console.log('payment', grandTotal)
  useEffect(() => {
    fetch(" https://shop-now-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ grandTotal }),
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret));
  }, [grandTotal]);

  const handleSubmit = async event => {
    // 
    event.preventDefault();
    if (!stripe || !elements || proccessing) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error,  } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess('')
    setProccessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {

            email: buyerEmail,
          },
        },
      },
    );

    if (confirmError) {
      setCardError(confirmError.message)
    }
    if (paymentIntent.status === 'succeeded') {
      setSuccess('Congrats Your Payment is Done')
      setTransactionID(paymentIntent.id)
       setProccessing(false)
      toast.success('Payment Success')
      navigate('/dashboard/delivery')


      fetch(` https://shop-now-server.vercel.app/payments/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': "application/json",
        },
      
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })

    }

  };

  return (
    <div>
      {
        proccessing ?
          <>
          </>
          :
          <>
            <form onSubmit={handleSubmit}>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
              <p className="text-red-500">{cardError}</p>
              <button
                className="bg-orange-500 rounded-full px-4 font-semibold text-white hover:bg-white hover:text-orange-500 border-white border hover:border-orange-500 py-1 btn-sm my-4"
                type="submit"
                disabled={!stripe || !clientSecret}
              >
                Pay
              </button>
            </form>
            {
              success && <div>
                <p className="text-green-500">{success}</p>
                <p className="">{transactionID}</p>
              </div>
            }

          </>
      }
    </div>
  );
};

export default CheckOutForm;
