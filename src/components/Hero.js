import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from './Navbar/NavBar';

const Hero = () => {
    return (
        <>
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
            </Helmet>
            <div className="hero bg-gray-900 text-white min-h-screen flex flex-col" id="hero" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <NavBar />
                <div className="flex flex-col justify-center items-center flex-grow text-center px-8 md:px-16 lg:px-48">
                    <h1 className="mb-6 text-3xl md:text-5xl font-semibold leading-snug">
                        Providing new and gently used shoes to individuals and communities in need
                    </h1>
                    <p className="text-lg md:text-2xl font-medium text-gray-300 mb-8 leading-relaxed">
                        Working together as a community, for the community
                    </p>
                    <a
                        href="/contact"
                        className="text-white bg-black hover:bg-gray-800 px-8 py-4 rounded-2xl text-lg shadow-lg transition-transform transform hover:scale-105"
                    >
                        Contact Us
                        <svg
                            className="w-5 h-5 ml-2 inline-block"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Hero;
