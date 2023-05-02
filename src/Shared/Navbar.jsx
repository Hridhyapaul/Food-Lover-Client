import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/Images/logo.svg'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center container mx-auto'>
            <div className='text-4xl text-white w-[25%] flex justify-start gap-3'>
                <img src={logo} className='h-[40px]' />
                <p>Food Lover</p>
            </div>
            <div className='text-white w-[50%] text-lg text-center'>
                <Link to="/" className='mx-4 text-center '>Home</Link>
                <Link to="/about" className='mx-4 text-center'>About Us</Link>
                <Link to="/menu" className='mx-4 text-center'>Menu</Link>
                <Link to="/blog" className='mx-4 text-center'>Blog</Link>
                <Link to="/contact" className='mx-4 text-center'>Contact Us</Link>
            </div>
            <div className='text-white w-[25%] text-right'>
                <Link to="/login" className='mx-4 text-right'>Login</Link>
                <Link to="/register" className='mx-4 text-right'>Register</Link>
            </div>
        </nav>
    );
};

export default Navbar;