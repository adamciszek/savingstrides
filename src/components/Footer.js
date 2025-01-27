import React from "react";
import { HashLink } from "react-router-hash-link";
import {Link} from "react-router-dom";

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
                                <p>savingstrides@gmail.com</p>
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
                                        smooth to="#about"
                                        className="text-gray-800 hover:text-gray-900 hover:tracking-wider transition-all duration-250 ease-in-out inline-block"
                                    >
                                        About
                                    </HashLink>
                                </li>
                                <li className="mb-2" style={{minWidth: "150px"}}>
                                    <HashLink
                                        smooth to="#OurPartners"
                                        className="text-gray-800 hover:text-gray-900 hover:tracking-wider transition-all duration-250 ease-in-out inline-block"
                                    >
                                        Our Partners
                                    </HashLink>
                                </li>
                                <li className="mb-2" style={{minWidth: "150px"}}>
                                    <HashLink
                                        smooth to="#GetInvolved"
                                        className="text-gray-800 hover:text-gray-900 hover:tracking-wider transition-all duration-250 ease-in-out inline-block"
                                    >
                                        Get Involved
                                    </HashLink>
                                </li>
                                <li className="mb-2" style={{minWidth: "150px"}}>

                                    <a href="https://buy.stripe.com/3cs4jO8ceaXSghO6oo"
                                       className="text-gray-800 hover:text-gray-900 hover:tracking-wider transition-all duration-250 ease-in-out inline-block"                                       target="_blank"
                                       >
                                        Donate
                                    </a>
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
                            <div className="flex space-x-6">
                                <a
                                    href="https://www.linkedin.com/company/saving-strides"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-black hover:text-gray-900 transition duration-150 ease-in-out"
                                    aria-label="LinkedIn"
                                >
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="4.983" cy="5.009" r="2.188"></circle>
                                        <path
                                            d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.instagram.com/savingstrides/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-black hover:text-gray-900 transition duration-150 ease-in-out"
                                    aria-label="Instagram"
                                >
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                                    </svg>
                                </a>
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
