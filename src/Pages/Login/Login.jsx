import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <div className='Container mx-auto px-[80px]'>
            <div className='w-[40%] mx-auto border-2 p-5 my-10 rounded-lg'>
                <form className="flex flex-col gap-4">
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
                <p className='text-center mt-3'>New user? <Link className='text-decoration-none text-[#64748b]' to="/register">Create an Account</Link></p>

                <p className='text-center mt-5'>Or</p>

                <div className='space-y-3 mt-5'>
                    <Button type="submit" className='bg-white hover:bg-white text-black border-1 border-black w-full'>
                        <p className='flex justify-start items-center gap-3'><FcGoogle className='text-[25px]'></FcGoogle> <span className='text-lg'>Continue with Google</span></p>
                    </Button>
                    <Button type="submit" className='bg-white hover:bg-white text-black border-1 border-black w-full'>
                        <p className='flex justify-start items-center gap-3'><FaGithub className='text-[25px]'></FaGithub> <span className='text-lg'>Continue with GitHub</span></p>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;