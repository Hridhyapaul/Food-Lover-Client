import { Button, Checkbox, Label, TextInput, Toast } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordSuccess, setPasswordSuccess] = useState('')
    const { createUser } = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password)

        createUser(email, password)
            .then(result => {
                const registerUser = result.user;
                console.log(registerUser)
                form.reset();
                setError('')
                setSuccess('User has been created successfully')
                updateUserData(result.user, name, photo)
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
                setSuccess('')
            })
    }

    const handlePassword = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput)
        const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        const isContainsUppercase = /^(?=.*[A-Z]).*$/;

        if (passwordInput.length < 6) {
            setPasswordError("Password must be 6 characters long");
            setPasswordSuccess('');
            return;
        }
        else if (!isContainsUppercase.test(passwordInput)) {
            setPasswordError("Password must have at least one Uppercase Character.");
            return;
        }
        else if (!isContainsSymbol.test(passwordInput)) {
            setPasswordError("Password must have at least one special character.");
            return;
        }
        else {
            setPasswordError('');
            setPasswordSuccess('Excellent!');
        }

    };

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
            .then(() => {
                console.log('user name updated')
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <div className='Container mx-auto px-[80px]'>
            <div className='w-[40%] mx-auto border-2 p-5 my-10 rounded-lg'>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="Your Name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            type="text"
                            placeholder="Name"
                            name='name'
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email"
                                value="Your Email"
                            />
                        </div>
                        <TextInput
                            id="email"
                            type="email"
                            name='email'
                            placeholder="Email"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="photo"
                                value="Photo URL"
                            />
                        </div>
                        <TextInput
                            id="photo"
                            type="text"
                            name='photo'
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password"
                                value="Your Password"
                            />
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            name='password'
                            value={password}
                            onChange={handlePassword}
                            required={true}
                            shadow={true}
                        />
                    </div>
                    {
                        password ?
                            passwordError ?
                                <p className='flex items-center gap-2'><FaExclamationCircle className='text-[#f87171]'></FaExclamationCircle> <span className='text-[#f87171]'>{passwordError}</span></p>
                                :
                                <p className='flex items-center gap-2'><FaCheckCircle className='text-[#34d399]'></FaCheckCircle> <span className='text-[#34d399]'>{passwordSuccess}</span></p> : ""
                    }
                    <div className="flex items-center gap-2">
                        <Checkbox id="agree" />
                        <Label htmlFor="agree">
                            <p className='space-x-1 text-[16px]'><span>I agree with the</span>
                                <Link
                                    to="/forms"
                                    className="text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    <span>terms and conditions</span>
                                </Link></p>
                        </Label>
                    </div>
                    <Button type="submit">
                        <p className='text-lg'>Register new account</p>
                    </Button>
                </form>
                {
                    error && <p className='text-[#f87171] mt-3'>{error}</p>
                }
                {
                    success && <div className='mt-3 flex justify-center'>
                        <p className='text-[#34d399] font-semibold flex justify-start items-center gap-2'><FaCheckCircle className='text-[#34d399]'></FaCheckCircle> <span>{success}</span> </p>
                    </div>
                }
                <p className='text-center mt-3'>Have an account? <Link className='text-decoration-none text-[#64748b]' to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;