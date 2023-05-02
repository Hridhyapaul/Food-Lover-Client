import React from 'react';
import Navbar from './Navbar';
import MyBackgroundImage from '../../public/Images/bg.jpg'

const Header = () => {
    return (
        <div>
            <div className='h-screen w-full bg-cover bg-center bg-gradient-to-r from-cyan-500 to-blue-500' style={{ backgroundImage: `url(${MyBackgroundImage})` }}>
                <div className='bg-slate-600 py-5 px-[80px] bg-opacity-50'>
                    <Navbar></Navbar>
                </div>
                <div class="flex justify-center items-center min-h-[calc(100vh-80px)] mx-[300px]">
                    <div class="text-center space-y-4 rounded-xl">
                        <h1 class="text-4xl font-bold text-white">Delicious Bakery Items</h1>
                        <h2 class="text-5xl font-bold text-white">Coconut With <span className='text-[#f59e0b]'>Lemon Grass</span></h2>
                        <p className='text-lg text-white mx-[60px]'>We equally celebrate those who love to cook and those who just really love to eat. Wherever you fall on that spectrum, you'll find your people here. So come get to know us—the team behind Delish. Meet the people who work hard to bring you the recipes, stories, and videos you see every month.</p>
                        <div className='space-x-5'>
                            <button className='transition delay-150 duration-300 ease-in-out bg-white px-4 py-2 rounded-full font-bold'>Learn More</button>
                            <button className='bg-[#f59e0b] px-4 py-2 rounded-full font-bold'>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;