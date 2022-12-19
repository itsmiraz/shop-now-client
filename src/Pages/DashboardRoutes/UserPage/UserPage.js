import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/UserContext';
import UpdateUser from './UpdateUser';

const UserPage = () => {
    const { user, userDB } = useContext(AuthContext)
    const imgHostKey = process.env.REACT_APP_imgbbKey
    const [animation, setanimation] = useState(false)
    const [fileList, setFileList] = useState([]);
    const [userimg, setUserImage] = useState('https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg')

    const handleUploadIamge = (data) => {
        data.preventDefault()
        // const form = data.target;
        const image = userimg;

        const updateDoc = {
            name: user?.displayName,
            img: image
        }
        fetch(`https://shop-now-server.vercel.app/update/${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateDoc)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Updated')
            })



    }


    useEffect(() => {

        if (userDB?.userImg) {
            setUserImage(userDB?.userImg)
        }
    }, [userDB?.userImg])

    useEffect(() => {
        if (fileList?.target?.files[0]) {
            const image = fileList?.target?.files[0];
            console.log(image)
            setanimation(true)
            const formData = new FormData();
            formData.append('image', image);
            const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
            fetch(url, {
                method: 'POST',
                body: formData,
            })
                .then(res => res.json())
                .then(imgData => {
                    console.log(imgData)
                    setUserImage(imgData?.data?.url)
                    setanimation(false)
                })
        }


    }, [fileList?.target?.files, imgHostKey])
    // console.log(userimg);
    // console.log(userDB)


    return (
        <div className='bg-gray-300 h-screen w-full'>
            <h1 className='font-semibold text-xl text-center my-5'>User Page</h1>

            <form onSubmit={handleUploadIamge} className=' flex relative flex-col justify-center max-w-xs mx-auto mb-10 p-6 shadow-md sm:px-12 text-gray-900 bg-gray-100' >
                <div className='drop-file-input  absolute left-0' >
                    {
                        animation ?
                            <>
                                <div className="py-4 mx-auto rounded w-60  animate-pulse ">
                                    <div className="flex p-4 space-x-4 ">
                                        <div className="flex-shrink-0 w-16 h-16 mx-auto rounded-full dark:bg-gray-700"></div>
                                    </div>
                                </div>
                            </>
                            :
                          
                                <div className='h-28 overflow-hidden rounded-full'>
                                <img className='w-28 mx-auto relative  rounded-full ' src={`${userimg}`} alt="" />
                            </div>
                         

                    }
                    <input name='image' onChange={setFileList} className='' type="file" />
                </div>
                {
                    fileList?.target?.files[0] &&

                    <button type='submit' className="bg-orange-500 text-white px-3 py-1 font-semibold absolute right-4 top-4">Update</button>


                }
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName}</h2>
                        <p className="px-5 text-xs sm:text-base text-gray-400">{user?.email}</p>
                    </div>

                </div>

            </form>



        </div>
    );
};

export default UserPage;