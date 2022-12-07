import React from 'react';
import { motion } from "framer-motion"
const Backdrop = ({ children,isVisible,setopenMenu,openMenu}) => {
    return (
        <motion.div
            className='absolute z-10 top-0 left-0 h-[100%] w-[100%] flex justify-center items-center bg-black opacity-10	'
            animate={{ opacity: isVisible ? 1 : 0 }}
            onClick={()=>setopenMenu(!openMenu)}
        >
            {
                children
            }
        </motion.div>
    );
};

export default Backdrop;