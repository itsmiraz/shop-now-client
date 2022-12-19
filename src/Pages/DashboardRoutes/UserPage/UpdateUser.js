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
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                            </svg> */}
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