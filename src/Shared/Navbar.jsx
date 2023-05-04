import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../public/Images/logo.svg'
import { AuthContext } from '../Provider/AuthProvider';
import { Avatar, Button, Tooltip } from 'flowbite-react';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? 'yellow' : 'white',
        }
    }
    const handleLogout = () => {
        logout()
            .then()
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <nav className='flex justify-between items-center container mx-auto'>

            {/* logo and Website name */}

            <div className='text-4xl text-white w-[25%] flex justify-start gap-3'>
                <Link to="/" className='flex justify-start gap-3'>
                    <img src={logo} className='h-[40px]' />
                    <p>Food Lover</p>
                </Link>
            </div>

            {/* NavLink */}
            
            <div className='text-white w-[50%] text-lg text-center'>
                <NavLink style={navLinkStyles} to="/" className='mx-4 text-center' active>Home</NavLink>

                <NavLink style={navLinkStyles} to="/blog" className='mx-4 text-center'>Blog</NavLink>

            </div>

            {/* Add login and Register button conditionally */}

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
                            <NavLink style={navLinkStyles} to="/login" className='mx-4 text-right'>Login</NavLink>
                            <NavLink style={navLinkStyles} to="/register" className='mx-4 text-right'>Register</NavLink>
                        </div>

                }

            </div>
        </nav>
    );
};

export default Navbar;