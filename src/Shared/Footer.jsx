import { Footer } from 'flowbite-react';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";

const Foot = () => {
    return (
        <Footer bgDark={true}>
            <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4 ">
                    <div>
                        <Footer.Title title="Company" />
                        <Footer.LinkGroup col={true}>
                            <Footer.Link href="#">
                                About
                            </Footer.Link>
                            <Footer.Link href="#">
                                Home
                            </Footer.Link>
                            <Footer.Link href="#">
                                Blog
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="help center" />
                        <Footer.LinkGroup col={true}>
                            <Footer.Link href="#">
                                Discord Server
                            </Footer.Link>
                            <Footer.Link href="#">
                                Twitter
                            </Footer.Link>
                            <Footer.Link href="#">
                                Facebook
                            </Footer.Link>
                            <Footer.Link href="#">
                                Contact Us
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="legal" />
                        <Footer.LinkGroup col={true}>
                            <Footer.Link href="#">
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link href="#">
                                Licensing
                            </Footer.Link>
                            <Footer.Link href="#">
                                Terms & Conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="download" />
                        <Footer.LinkGroup col={true}>
                            <Footer.Link href="#">
                                iOS
                            </Footer.Link>
                            <Footer.Link href="#">
                                Android
                            </Footer.Link>
                            <Footer.Link href="#">
                                Windows
                            </Footer.Link>
                            <Footer.Link href="#">
                                MacOS
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
                <div className="w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="#"
                        by="Food-Lover™"
                        year={2023}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon
                            href="#"
                            icon={FaFacebook}
                        />
                        <Footer.Icon
                            href="#"
                            icon={FaInstagram}
                        />
                        <Footer.Icon
                            href="#"
                            icon={FaTwitter}
                        />
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default Foot;