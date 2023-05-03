import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/Images/logo.svg'
import { AuthContext } from '../Provider/AuthProvider';
import { Avatar, Button, Tooltip } from 'flowbite-react';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
            .then()
            .catch(error => {
                console.log(error.message)
            })
    }
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
                {
                    user ?
                        <div className='flex justify-end items-center gap-3'>
                            <Tooltip content={user.displayName} style="light">
                                <Avatar
                                    img={user.photoURL}
                                    rounded={true}
                                />
                            </Tooltip>

                            <Button color="light" pill={true} onClick={handleLogout} className='py-[0px]'>
                                <p className='text-[16px]'>Logout</p>
                            </Button>
                        </div>
                        :
                        <div>
                            <Link to="/login" className='mx-4 text-right'>Login</Link>
                            <Link to="/register" className='mx-4 text-right'>Register</Link>
                        </div>

                }

            </div>
        </nav>
    );
};

export default Navbar;