import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../../assests/logo/logo.png'
import { AuthContext } from '../../Context/UserContext';
import toast from 'react-hot-toast';

const Header = () => {
    const [open, setOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(res => {
                // console.log(res)
                toast.success('Log out SuccessFully')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className=' shadow  sticky top-0 z-50 bg-gray-200 md:bg-white text-gray-700 items-center md:px-10 px-4 py-3 flex justify-between w-full'>

            <img width={'150px'} src={logo} alt="" />

           

            <div>
                <ul className={`md:flex items-center right-0 z-0 bg-gray-200 md:bg-white w-full py-4 md:py-0 text-gray-700 text-center justify-center md:static duration-300 ease-linear absolute ${open ? 'top-12' : 'top-[-450px]'}`}>
                    <li className='font-semibold hover:text-orange-500 mr-4'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='font-semibold hover:text-orange-500 mr-4'>
                        <Link to='/shop'>Shop</Link>
                    </li>
                    <li className='font-semibold hover:text-orange-500 mr-4 '>
                        <Link>About</Link>
                    </li>
                    <li className='font-semibold hover:text-orange-500 mr-4 '>
                        <Link to='/dashboard'>DashBoard</Link>
                    </li>
                    <li className='font-semibold hover:text-orange-500 '>
                        <Link to='/cart' >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </Link>
                    </li>
                    {
                        user?.uid ?
                            <>


                                <li>
                                    <button onClick={handleLogOut} type="button" className="px-4 py-2 mx-4  font-semibold rounded-full border border-orange-600 text-orange-600 bg-white">Sign Out</button>

                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <Link to='/login'>
                                        <button type="button" className="px-4 py-2 mx-4 my-2 font-semibold rounded-full bg-orange-600 text-white">Sign In</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/register'>
                                        <button type="button" className="px-4 py-2 h-10  font-semibold rounded-full border border-orange-600 text-orange-600 bg-white">Sign Up</button>
                                    </Link>
                                </li>
                            </>


                    }

                </ul>
                <div onClick={() => setOpen(!open)} className="h-6  bg-orange-400 rounded-full p-1 text-white w-6 md:hidden" >

                       


                        {open ?
                            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                            : <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>


                        }

                </div>
            </div>
        </div >
    );
};

export default Header;