import React from 'react';
import Navbar from '../Shared/Navbar';
import Login from '../Pages/Login/Login';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <div className='bg-slate-600 py-5 px-[80px] bg-opacity-50'>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default LoginLayout;