import React from 'react';

const UpdateUser = () => {
    return (
        <div>

            <input type="checkbox" id="updateUser" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box rounded relative">
                    <label htmlFor="updateUser" className="btn btn-sm  btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-center font-semibold'>Update Profle</h1>
                    <form className='relative'>


                        <div className='drop-file-input  absolute left-0' >
                         
                            <img className='w-28 mx-auto relative  rounded-full ' src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="" />

                            <input name='image' className='' type="file" />

                        </div>

                        {/* <input type="text" d /> */}

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;