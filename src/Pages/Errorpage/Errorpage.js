import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <section className="flex items-center h-full mt-10 p-16 bg-gray-100 text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-orange-600">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl text-gray-800 font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 text-gray-800">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to='/' className="px-8 py-3 font-semibold rounded bg-orange-400 text-gray-900">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Errorpage;