import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

const Cta = () => {
    return (
        <div className="w-full flex items-center justify-center text-white cta">
            <div className="mx-8 w-full h-auto text-center lg:text-left py-16 px-4 sm:px-12 flex flex-col lg:flex-row justify-center items-center">
                <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center">
                    <div className="mb-4 w-full lg:w-1/2">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to make a difference?</p>
                        <p className="text-base sm:text-lg md:text-2xl">
                            Whether you're donating shoes, contributing to a cause, or joining our next event,
                            <span className="font-black"> we'd love to have you involved!</span>
                        </p>
                    </div>

                    <div className="w-full lg:w-72 pt-6 lg:mx-12 flex flex-col gap-4 items-center lg:items-start">
                        {/* Contact Us Button */}
                        <Link to="/contact"
                              className="bg-transparent border hover:bg-black hover:border-black text-white text-center rounded-lg px-8 py-3 flex items-center justify-center group text-base sm:text-lg">
                            Contact Us
                            <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </Link>

                        {/* Find the Next Event Button */}
                        <HashLink smooth to="/#GetInvolved"
                                  className="bg-transparent border hover:bg-black hover:border-black text-white text-center rounded-lg px-8 py-3 flex items-center justify-center group text-base sm:text-lg">
                            Find the Next Event
                            <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </HashLink>

                        {/* Donate Button */}
                        <a href="https://buy.stripe.com/3cs4jO8ceaXSghO6oo"
                           className="bg-transparent border hover:bg-black hover:border-black text-white text-center rounded-lg px-8 py-3 flex items-center justify-center group text-base sm:text-lg"
                           target="_blank"
                           rel="noopener noreferrer">
                            Donate
                            <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cta;
