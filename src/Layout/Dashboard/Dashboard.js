import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import { AuthContext } from '../../Context/UserContext';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  relative flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className=" absolute top-5 left-5 drawer-button lg:hidden">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>


                    </label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>



                    <ul className="menu p-4 w-72 bg-base-100 text-base-content">
                        <div>
                            <img className='w-28 h-28 rounded-full mx-auto' src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="" />
                            <h1 className='text-center text-xl font-semibold'>{user?.displayName}</h1>

                        </div>
                        <li><Link to='/dashboard/delivery'>Delivery</Link></li>
                        <li><Link to='/dashboard/adminpanel'>Admin Panel</Link></li>
                        <li><Link to='/dashboard/allusers'>All Users</Link></li>
                        <li><Link to='/dashboard/allsales'>Sales</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;