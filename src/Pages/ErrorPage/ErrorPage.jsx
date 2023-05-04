import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex justify-center items-center mt-60'>
            <div >
                <h2 className='text-5xl text-center font-semibold'>
                    {error?.message}
                </h2>
                <div className='flex justify-center'>
                    <Link to='/'><button className='bg-[#8b5cf6] text-[white] py-3 px-4 font-semibold rounded-md mt-5'>Back to Homepage</button></Link>
                </div>
            </div>
        </section>

    );
};

export default ErrorPage;