import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import LoadingAnimation from '../../Components/LoadingAnimation/LoadingAnimation';

const AllUsers = () => {
    

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(' https://shop-now-server.vercel.app/users')
            const data = await res.json()
            return data
        }
    })
    const handleMakeAdmin = (email) => {
        fetch(` https://shop-now-server.vercel.app/makeadmin?email=${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('SuccessFully Created Admin')
                refetch()
            })

    }

    const handleMakeMod = (email) => {
        fetch(` https://shop-now-server.vercel.app/makemod?email=${email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('SuccessFully Created Admin')
                refetch()
            })
    }


    if (isLoading) {
        return <LoadingAnimation></LoadingAnimation>
    }
    return (
        <div className='h-screen bg-gray-200 w-full'>
            <h1 className='text-xl text-center font-semibold my-4'>All Users</h1>
            <div className=''>
            {
                        users.slice(0, 5).map(user => <div
                            key={user._id}
                            className='flex bg-white shadow my-4 h-10 px-2 items-center mx-auto w-[400px] justify-between  font-semibold gap-3'
                        >
                            <p>{user.name}</p>
                            <p>{user.email.slice(0, 25)}..</p>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className=" m-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                    </svg>


                                </label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>{user.role === 'admin' ?
                                        <button>Admin</button>
                                        :
                                        <>
                                            <button onClick={() => handleMakeAdmin(user.email)}>Make Admin</button>
                                        </>
                                    }</li>
                                 
                                            {
                                              user.role === 'mod' ?
                                                    <>
                                                        <li><button type="button">Moderator</button></li>
                                                    </>
                                                    :
                                                    <>
                                                        <li>
                                                            <button onClick={() => handleMakeMod(user.email)}>Make Morderator</button>
                                                        </li>
                                                    </>
                                            }
                                   
                                </ul>
                            </div>
                        </div>)
                    }
            </div>
        </div>
    );
};

export default AllUsers;