import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { setUser, loginUser , googleSignIn, googleProvider, githubSignIn, githubProvider} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page', location)

    const from = location.state?.from?.pathname || '/'

    const handleLoginSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        loginUser(email, password)
            .then(result => {
                const signedUser = result.user;
                console.log(signedUser);
                form.reset();
                setError('')
                setSuccess('You have successfully logged in')
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
                setSuccess('')
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    const handleGitHubSignIn = () => {
        githubSignIn(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div className='Container mx-auto px-[80px]'>
            <div className='w-[40%] mx-auto border-2 p-5 my-10 rounded-lg'>
                <form className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            name='email'
                            placeholder="name@gmail.com"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password1"
                            type="password"
                            name='password'
                            required={true}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">
                            Remember me
                        </Label>
                    </div>
                    <Button type="submit">
                        <p className='text-lg'>Submit</p>
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
                <p className='text-center mt-3'>New user? <Link className='text-decoration-none text-[#64748b]' to="/register">Create an Account</Link></p>

                <p className='text-center mt-5'>Or</p>

                <div className='space-y-3 mt-5'>
                    <Button type="submit" className=' text-black border-1 border-black w-full' onClick={handleGoogleSignIn}>
                        <p className='flex justify-start items-center gap-3'><FcGoogle className='text-[25px]'></FcGoogle> <span className='text-lg'>Continue with Google</span></p>
                    </Button>
                    <Button type="submit" className=' text-black border-1 border-black w-full' onClick={handleGitHubSignIn}>
                        <p className='flex justify-start items-center gap-3'><FaGithub className='text-[25px]'></FaGithub> <span className='text-lg'>Continue with GitHub</span></p>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;