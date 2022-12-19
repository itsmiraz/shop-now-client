import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const Contact = () => {
    const { user } = useContext(AuthContext)
    
    const [successMessage,setSuccessMessage] = useState('')

    

    const handleMessage = (e) => {
        e.preventDefault()
        console.log('clicked')

        const form = e.target;
        const message = form.message.value;
        const name = user.displayName;
        const email = user.email;
        const messageBody = {
            name,
            email,
            message,
        }
        console.log(messageBody);
        fetch(' https://shop-now-server.vercel.app/message', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(messageBody)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset()
                toast.success('Message Sent')
                setSuccessMessage('Thank You for Your Message we will Reply as Soon as possible')
                setTimeout(() => {
                    setSuccessMessage('')
                }, 4000);
        })

    }

    return (
        <div>
            <section className="p-6 ">
                <form onSubmit={handleMessage} action="" className="container text-white flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    
                    <fieldset className="grid md:grid-cols-2  grid-cols-1 px-4 md:px-20 gap-6 p-2 md:p-6 rounded-md shadow-sm bg-orange-600">
                        <div className="flex flex-col  justify-center ">
                            <h1 className='text-4xl font-semibold'>Contact Us?</h1>
                            <p className='w-full md:w-96 my-4'>Feel free to send us any message or any bug report so that we can work on that.We will reply as soon as possible . Or you have a problem with our product or taking to long to delivery you can contact us here.</p>
                        </div>
                        <div className="">
                            <div className='grid gap-5 grid-cols-2'>
                            <div className=" ">
                                <label htmlFor="username" className="text-sm">Name</label>
                                <input readOnly required name='name' id="username" defaultValue={user?.displayName} type="text" placeholder="Your Name" className="w-full text-gray-800 rounded py-2 px-2" />
                            </div>
                            <div className=" ">
                                <label htmlFor="username" className="text-sm">Email</label>
                                <input readOnly required name='email' defaultValue={user?.email} id="username" type="text" placeholder="Your Email" className="w-full  text-gray-800 rounded py-2 px-2" />
                            </div>
                           </div>
                            <div className="col-span-full">
                                <p htmlFor="bio" className="text-sm my-2">Your Message</p>
                                <textarea name='message' required id="bio" placeholder="" className="w-full rounded p-2  text-gray-800 h-28"></textarea>
                            </div>
                            <div className="col-span-full">
                            <p >{successMessage}</p>  
                                <div className="flex items-center space-x-2">
                                
                                    {
                                        user?.uid ?
                                            <>
                                              
                                                <button type="submit" className="px-4 py-1 font-semibold my-2 rounded bg-gray-800 text-white">Send</button>
                                            </>
                                            :
                                            <>
                                              <p className='font-semibold'>  Please <Link to='/login'><span className='underline'>Login</span></Link> for contact</p>
                                            </>
                                }
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};
 
export default Contact;