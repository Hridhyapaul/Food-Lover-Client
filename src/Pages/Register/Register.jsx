import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='Container mx-auto px-[80px]'>
            <div className='w-[40%] mx-auto border-2 p-5 my-10 rounded-lg'>
                <form className="flex flex-col gap-4">
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
                            required={true}
                            shadow={true}
                        />
                    </div>
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
                <p className='text-center mt-3'>Have an account? <Link className='text-decoration-none text-[#64748b]' to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;