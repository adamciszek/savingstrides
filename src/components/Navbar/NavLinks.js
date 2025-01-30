import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = ({ isTransparent, isMobileMenuOpen }) => {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const offset = 100;
        window.scrollTo({ top: yCoordinate - offset, behavior: 'smooth' });
    };

    // Determine hover color based on isMobileMenuOpen and isTransparent
    const hoverColor = isMobileMenuOpen ? 'text-black' : (isTransparent ? 'text-white' : 'text-black');

    return (
        <>
            <HashLink
                className={`px-4 font-extrabold text-gray-500 hover:${hoverColor}`}
                smooth to="/#about"
                scroll={scrollWithOffset}
            >
                About
            </HashLink>
            <HashLink
                className={`px-4 font-extrabold text-gray-500 hover:${hoverColor}`}
                smooth to="/#partners"
                scroll={scrollWithOffset}
            >
                Our Partners
            </HashLink>
            <HashLink
                className={`px-4 font-extrabold text-gray-500 hover:${hoverColor}`}
                smooth to="/#GetInvolved"
                scroll={scrollWithOffset}
            >
                Get Involved
            </HashLink>
            <a
                className="text-white bg-black hover:bg-gray-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
                href="/contact"
            >
                Contact Us
            </a>
        </>
    );
};

export default NavLinks;