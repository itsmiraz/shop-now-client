import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';

const UserPage = () => {
    const { user } = useContext(AuthContext)

    const imgHostKey = process.env.REACT_APP_imgbbKey
    const [animation, setanimation] = useState(false)
    const [fileList, setFileList] = useState([]);
    const wrapperRef = useRef(null);

    const handleUploadIamge = (data) => {
        const image = fileList[0];
        console.log(image)
        // setanimation(true)
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        // fetch(url, {
        //     method: 'POST',
        //     body: formData,
        // })
        //     .then(res => res.json())
           

    }


    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    // const onFileDrop = (e) => {
    //     const newFile = e.target.files[0];
    //     if (newFile) {
    //         const updatedList = [...fileList, newFile];
    //         setFileList(updatedList);
    //         props.onFileChange(updatedList);
    //     }
    // }

    // const fileRemove = (file) => {
    //     const updatedList = [...fileList];
    //     updatedList.splice(fileList.indexOf(file), 1);
    //     setFileList(updatedList);
    //     props.onFileChange(updatedList);
    // }
    


    return (
        <div className='bg-gray-300 w-full'>
            <h1 className='font-semibold text-xl text-center my-5'>User Page</h1>
            <div className="flex relative flex-col justify-center max-w-xs mx-auto mb-10 p-6 shadow-md sm:px-12 text-gray-900 bg-gray-100">
                <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 border p-1 border-blue-500 border-spacing-4  border-4 mx-auto rounded-full bg-white" />
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName}</h2>
                        <p className="px-5 text-xs sm:text-base text-gray-400">{user?.email}</p>
                    </div>

                </div>
                <form onSubmit={handleUploadIamge} className='absolute   top-7 left-48 bg-gray-200 rounded-full p-1 '>

                    <div className='drop-file-input'
                         ref={wrapperRef}
        
                         onDragEnter={onDragEnter}
                         onDragLeave={onDragLeave}
                         onDrop={onDrop}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>

                        <input name='image' className='' type="file" />
                       
                    </div>
                   
                    
                </form>
            </div>
        </div>
    );
};

export default UserPage;