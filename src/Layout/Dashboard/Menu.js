import React from 'react';
import { motion } from 'framer-motion'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useAdmin from '../../Hooks/useAdmin/useAdmin';
import MenuRoutes from './MenuRoutes';

const Menu = ({ openMenu }) => {
   
    const dropIn = {
        hide: {

            x: -500
        },
        visible: {
            opacity: 1,
            x: 0,

            transition: {
                ease: "easeInOut", duration: 0.1,

                damping: 25,
                stiffness: 500,
            },
        },

    }


    return (


        <div>


            <motion.div
                className={` absolute top-0 z-40   md:hidden left-0 }`}
                animate={openMenu ? 'visible' : 'hide'}
                variants={dropIn}


            >
               
            <MenuRoutes></MenuRoutes>
            </motion.div>

            <div className='absolute top-0 z-40 hidden md:block md:left-0 '>
               <MenuRoutes></MenuRoutes>
            </div>

        </div>



    );
};

export default Menu;