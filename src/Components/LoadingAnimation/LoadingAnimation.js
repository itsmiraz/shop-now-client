import React from 'react';
import { PropagateLoader } from 'react-spinners';

const LoadingAnimation = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='flex justify-center items-center h-24'>
            <PropagateLoader color="#ea580c" />
        </div>
        </div>
    );
};

export default LoadingAnimation;