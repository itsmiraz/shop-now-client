import React from 'react';
import propTypes from 'prop-types';
import { useState } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { BarLoader, PropagateLoader } from 'react-spinners';

import uploadImg from '../../assests/assets/cloud-upload-regular-240.png'
import './drop-file-input/drop-file-input.css'
import ImageConfig from '../../ImageConfig/ImageConfig'
import { useEffect } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import toast from 'react-hot-toast';
const AddProductModal = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbbKey
    const [animation, setanimation] = useState(false)
    const navigate = useNavigate()
    const [fileList, setFileList] = useState([]);
    const wrapperRef = useRef(null);

    const handleAddProduct = (data) => {
        const image = fileList[0];
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
                if (imgData.success) {

                    const product = {
                        category_id: data.catagory,
                        rating: 4,
                        price: data.price,
                        title: data.title,
                        quantity: data.quantity,
                        image_url: imgData.data.url,
                        details: data.details

                    }
                    console.log(product)
                    fetch('http://localhost:5000/addproduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(insertdata => {
                            console.log(insertdata);
                            toast.success('Product Added')
                            navigate(`/shop/${data.catagory}`)
                            setanimation(false)
                        })

                }
            })

    }

    const [catagory, setcatagory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/catagory')
            .then(res => res.json())
            .then(data => {
                const cat = data.filter(cata => cata.id !== '00')
                setcatagory(cat)
            })
    }, [])

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }
    return (
        <div className=''>


            <input type="checkbox" id="addProduct" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box mt-20 rounded-none relative">
                    <label htmlFor="addProduct" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-center font-semibold  my-2'>Add A Product</h1>
                    {
                        animation ? <>
                            <div className='h-[400px] flex-col flex justify-center items-center'>
                                <p className='font-semibold my-5'>
                                    Your Product is Uploading Please Wait Few Seconds
                                </p>
                                <BarLoader color="#F97316" />
                            </div>
                        </>
                            :
                            <>

                                <form onSubmit={handleSubmit(handleAddProduct)}>
                                    <div>

                                        {
                                            fileList.length === 0 &&
                                            <div
                                                ref={wrapperRef}
                                                className="drop-file-input"
                                                onDragEnter={onDragEnter}
                                                onDragLeave={onDragLeave}
                                                onDrop={onDrop}
                                            >
                                                <div className="border-dashed border border-gray-300  w-full py-2 ">
                                                    <img className='w-24 mx-auto' src={uploadImg} alt="" />
                                                    <p className='text-center font-semibold'>Drag & Drop your files here</p>
                                                </div>
                                                <input onChange={onFileDrop} type="file" value="" />
                                            </div>
                                        }
                                        {
                                            fileList.length > 0 && (
                                                <div className="drop-file-preview">
                                                    <p className="drop-file-preview__title">
                                                        Ready to upload
                                                    </p>
                                                    {
                                                        fileList.map((item, index) => (
                                                            <div key={index} className="drop-file-preview__item">
                                                                <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                                                <div className="drop-file-preview__item__info">
                                                                    <p>{item.name}</p>
                                                                    <p>{item.size}B</p>
                                                                </div>
                                                                <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>

                                    <div>
                                        <label className="label">
                                            <span className="label-text">Title</span>
                                        </label>
                                        <input {...register("title", { required: true })} type="text" placeholder="Type here" className="input rounded-none input-bordered w-full " />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Catagory</span>
                                        </label>
                                        <select {...register("catagory", { required: true })} className="select select-bordered w-full max-w-xs">
                                            <option disabled defaultValue>Select</option>
                                            {
                                                catagory.map(cat => <option
                                                    key={cat._id}
                                                    value={cat.id}
                                                >{cat.name}</option>)
                                            }

                                        </select>
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input {...register("price", { required: true })} type="text" placeholder="Type here" className="input rounded-none input-bordered w-full " />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input {...register("quantity", { required: true })} type="text" placeholder="Type here" className="input rounded-none input-bordered w-full " />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Details</span>
                                        </label>
                                        <textarea {...register("details", { required: true })} type="text" placeholder="Type here" className="input rounded-none h-24 input-bordered w-full " />
                                    </div>

                                    <button className='bg-primary text-white px-4 py-2  font-semibold rounded my-3'>Submit</button>
                                </form>
                            </>

                    }
                </div>
            </div>
        </div>
    );
};

AddProductModal.propTypes = {
    onFileChange: propTypes.func
}


export default AddProductModal;