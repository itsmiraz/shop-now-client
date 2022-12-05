import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import bg from '../../../assests/catagory-bg/catagory-bg.svg'
import LoadingAnimation from '../../../Components/LoadingAnimation/LoadingAnimation';
import CatagoryCard from './CatagoryCard';
const Catagorye = () => {
    const [catagoris, setCatagory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/catagory')
            .then(res => res.json())
            .then(data => setCatagory(data))
    }, [])


    const {data:catagories,isLoading } = useQuery({
        queryKey: ['catagory'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/catagory`)
            const data = await res.json()
            return data
        }
    })


    if (isLoading) {
        return <LoadingAnimation></LoadingAnimation>
    }

    return (
        <div className='relative'>
            <div className='px-2 md:px-10 block md:bg-transparent bg-gray-900  md:absolute top-10'>
                <h1 className='text-4xl text-center my-4 font-bold text-white'>Catagories</h1>
                <div className='grid justify-items-center grid-cols-2 md:grid-cols-6'>
                    {
                        catagories.slice(1,7).map(cata => <CatagoryCard
                            key={cata.id}
                            cata={cata}
                        ></CatagoryCard>)
                    }
                </div>
            </div>
            <img className='w-full md:block hidden' src={bg} alt="" />
        </div>
    );
};

export default Catagorye;