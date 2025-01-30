import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';
import { HashLink } from 'react-router-hash-link';
import logo from './Saving-Strides-logo.png';

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <nav
            className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-white shadow-lg'}`}>
            <div className="flex flex-row justify-between items-center py-3">
                <div className="flex flex-row items-center pl-4 md:pl-8">
                    <HashLink smooth to="/#hero">
                        <img
                            src={logo}
                            alt="Saving Strides Logo"
                            className="h-10 w-auto object-contain md:h-14"
                            style={{maxWidth: '150px'}}
                        />
                    </HashLink>
                </div>

                <div className="group relative flex flex-col items-center">
                    <button
                        className={`p-2 rounded-lg lg:hidden ${top ? 'text-white' : 'text-black'}`}
                        onClick={handleClick}
                    >
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                            ) : (
                                <path fillRule="evenodd"
                                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                            )}
                        </svg>
                    </button>

                    <div className='hidden space-x-6 lg:inline-block p-5'>
                        <NavLinks isTransparent={top} isMobileMenuOpen={false} />
                    </div>

                    <div
                        className={`absolute transition-transform duration-300 ease-in-out flex justify-end top-full right-0 w-max p-4 bg-white lg:hidden shadow-xl rounded-md ${isOpen ? "block" : "hidden"}`}>
                        <div className='flex flex-col space-y-6'>
                            <NavLinks isTransparent={top} isMobileMenuOpen={isOpen} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;