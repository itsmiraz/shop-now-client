import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import LoadingAnimation from '../../Components/LoadingAnimation/LoadingAnimation';
import AddProductModal from './AddProductModal';

const AdminPanel = () => {

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json()
            return data
        }
    })

    const handleMakeAdmin = (email) => {
        fetch(`http://localhost:5000/makeadmin?email=${email}`, {
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
        fetch(`http://localhost:5000/makemod?email=${email}`, {
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
        <div className='bg-gray-300 h-screen p-5 w-full'>
            <h1 className='text-xl text-center font-semibold my-4' >This is Admin Panel</h1>
            <AddProductModal></AddProductModal>
            <div className='grid gird-cols-1 gap-5 md:grid-cols-2'>

                <div className=' gap-y-5 grid grid-cols-1  shadow-lg'>
                    <div className='bg-gray-200   py-5 '>
                    <h1 className='text-xl text-center font-semibold'>Admin and Moderators</h1>
                        <div className='px-8 '>
                        {
                            users.filter(user=>user.role !== 'user').map((user,i)=>  <div
                                key={user._id}
                                className='flex bg-white relative shadow my-4 h-10 px-2 items-center mx-auto justify-between  font-semibold gap-3'
                            >
                                <p className='absolute left-2'>{ i+1}.</p>
                                <p className='ml-4'>{user.name}</p>
                                <p>{user.email}</p>
                               
                            </div>)
                    }
                       </div>
                    </div>
                    <div className='bg-gray-200 flex justify-center items-center'>
                        <h1 className='text-2xl text-center font-bold'>Add A Products?</h1>
                        <label htmlFor="addProduct" className='px-4 py-2 bg-orange-500 font-semibold text-white rounded-full mx-4'>Add</label>
                       
                   </div>
                </div>
                <div className='bg-gray-200 px-10  py-5 shadow-lg'>
                    <h1 className='text-xl text-center font-semibold'>All Users</h1>
                    {
                        users.slice(0, 5).map((user,i) => <div
                            key={user._id}
                            className='flex bg-white relative shadow my-4 h-10 px-2 items-center mx-auto justify-between  font-semibold gap-3'
                        >
                            <p className='absolute left-2'>{ i+1}.</p>
                            <p className='ml-4'>{user.name}</p>
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
                    <Link to='/dashboard/allusers'>

                        <button className='bg-gray-100 px-4 py-2 rounded-full shadow' >
                            Show All
                        </button>
                    </Link>
                </div>
           
            </div>
        </div>
    );
};

export default AdminPanel;