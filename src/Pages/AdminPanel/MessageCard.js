import React from 'react';

const MessageCard = ({ message }) => {
    return (
        <div>
            <div className="container shadow-lg flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-white text-gray-900">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">

                        <div>
                            <h4 className="font-bold">{message.name}</h4>
                            <span className="text-xs text-gray-900">{message.email}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-500">

                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm text-gray-900">
                    <p className='text-normal font-semibold'>{message.message}</p>
                </div>
            </div>
        </div>
    );
};

export default MessageCard;