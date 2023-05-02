import React from 'react';
import Header from '../Shared/Header';
import Foot from '../Shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div className='container mx-auto px-[80px]'>
                <Foot></Foot>
            </div>
        </div>
    );
};

export default Main;