import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Foot from '../Shared/Footer';

const BlogLayout = () => {
    return (
        <div>
            <div className='bg-slate-600 py-5 px-[80px] bg-opacity-50'>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Foot></Foot>
            </div>
        </div>
    );
};

export default BlogLayout;