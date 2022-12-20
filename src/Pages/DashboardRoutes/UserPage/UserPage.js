import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/UserContext';

const UserPage = () => {
    const { user, userDB } = useContext(AuthContext)
    const imgHostKey = process.env.REACT_APP_imgbbKey
    const [animation, setanimation] = useState(false)
    const [fileList, setFileList] = useState([]);
    const [userimg, setUserImage] = useState('https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg')
    const [save, setSave] = useState(false)
    
    const handleUploadIamge = (data) => {
        // data.preventDefault()
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
                setSave(false)
            })



    }


    useEffect(() => {

        if (userDB?.userImg) {
            setUserImage(userDB?.userImg)
        }
    }, [userDB?.userImg])

    useEffect(() => {
        if (fileList?.target?.files[0]) {

            const filesize = fileList?.target?.files.item(0).size
            const filemb = filesize / 1024
            if (filemb > 500) {
                alert('Please Upload a photo under 500kb')
            }
            else {

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
                        setSave(true)
                    })

            }




        }


    }, [fileList?.target?.files, imgHostKey])
    // console.log(userimg);
    // console.log(userDB)


    return (
        <div className='bg-gray-200 px-28 h-screen w-full'>
            <h1 className='font-semibold text-xl text-center my-5'>User Page</h1>

            <div className=' flex relative flex-col  justify-center  mx-auto mb-10 p-4 shadow-md  text-gray-900 bg-gray-100' >

                <div>

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

                            <div className='h-28 w-28 mx-auto overflow-hidden rounded-full'>
                                <img className=' ' src={`${userimg}`} alt="" />

                            </div>
                    }
                </div>

                {/* Save Button */}
                {

                    save &&

                    <button onClick={handleUploadIamge} className="bg-orange-500 text-white btn rounded-none px-4 py-0 font-semibold absolute left-2 top-2">Save</button>


                }
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName}</h2>

                        <p className="px-5 text-xs sm:text-base text-gray-400">{user?.email}</p>
                    </div>

                </div>
                <div className="dropdown top-2 absolute right-2 dropdown-end">
                    <label tabIndex={0} className="btn  m-1">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>

                    </label>
                    <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box ">
                        <li>

                            <div className='drop-file-input   relative' >
                                <button className="px-10 font-semibold ">Update Avater</button>

                                <input name='image' onChange={setFileList} className='absolute top-0' type="file" />
                            </div>

                        </li>

                    </ul>
                </div>

            </div>



        </div>
    );
};

export default UserPage;