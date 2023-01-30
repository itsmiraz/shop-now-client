import React, {  useState } from 'react';
import {Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Menu from './Menu';

const Dashboard = () => {
    const [openMenu, setopenMenu] = useState(false)

   

    return (
        <div>
            <Header></Header>
            <div className="relative">
                <Menu
                    openMenu={openMenu}

                ></Menu>
              

                <div className="ml-0 md:ml-72 flex flex-col items-center justify-center">
                    <Outlet ></Outlet>
                    <button
                    onClick={()=>setopenMenu(!openMenu) }
                    >
                        <label className=" absolute top-5 right-5 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                            </svg>
                        </label>
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Dashboard;