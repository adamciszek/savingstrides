import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Footer Container */}
                <div className="flex flex-col lg:flex-row justify-between text-center lg:text-left">
                    {/* 1st Section */}
                    <div className="flex-1 flex justify-center items-center p-4">
                        <div className="p-8 bg-gray-100 text-black rounded-lg">
                            <h3 className="font-bold text-4xl mb-4">Saving Strides</h3>
                            <div className="text-md font-medium text-gray-600">
                                <p>contact@myemail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* 2nd Section */}
                    <div className="flex-1 flex justify-center items-center">
                        <div>
                            <h6 className="text-black text-xl font-bold mb-4">LINKS</h6>
                            <ul className="text-md">
                                <li className="mb-2" style={{minWidth: "150px"}}>
                                    <HashLink
                                        to="#"
                                        className="text-gray-800 hover:text-gray-900 hover:tracking-wider transition-all duration-250 ease-in-out inline-block"
                                    >
                                        About
                                    </HashLink>
                                </li>
                                <li className="mb-2" style={{minWidth: "150px"}}>
                                    <HashLink
                                        to="#"
                                        className="text-gray-800 hover:text-gray-900 hover:tracking-wider transition-all duration-250 ease-in-out inline-block"
                                    >
                                        Our Mission
                                    </HashLink>
                                </li>
                                <li className="mb-2" style={{minWidth: "150px"}}>
                                    <HashLink
                                        to="#"
                                        className="text-gray-800 hover:text-gray-900 hover:tracking-wider transition-all duration-250 ease-in-out inline-block"
                                    >
                                        Get Involved
                                    </HashLink>
                                </li>
                            </ul>

                        </div>
                    </div>

                    {/* 3rd Section */}
                    <div className="flex-1 flex justify-center items-center p-4">
                        <div>
                            <h6 className="text-black text-xl font-bold mb-4">Social Media</h6>
                            <p className="text-md font-medium text-gray-600 mb-4">
                                Follow us on social media.
                            </p>
                            <div className="flex space-x-4">
                                <Link
                                    to="#"
                                    className="text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out"
                                    aria-label="Twitter"
                                >
                                    <svg
                                        className="w-8 h-8 fill-current"
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                    </svg>
                                </Link>
                                <Link
                                    to="#"
                                    className="text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out"
                                    aria-label="Facebook"
                                >
                                    <svg
                                        className="w-8 h-8 fill-current"
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 border-t pt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Copyright &copy; {new Date().getFullYear()}{" "}
                        <HashLink to="#" className="hover:text-gray-900">
                            Saving Strides
                        </HashLink>
                        . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
