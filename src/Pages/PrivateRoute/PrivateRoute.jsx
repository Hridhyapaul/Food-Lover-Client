import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from 'flowbite-react';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    if (loading) {
        return <div className='flex justify-center items-center'>
            <Button className=''>
                <Spinner aria-label="Spinner button example" />
                <span className="pl-3">
                    Loading...
                </span>
            </Button>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace ></Navigate>
};

export default PrivateRoute;