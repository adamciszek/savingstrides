import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = ({ isTransparent, isMobileMenuOpen }) => {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const offset = 100;
        window.scrollTo({ top: yCoordinate - offset, behavior: 'smooth' });
    };

    const getLinkClass = () => {
        if (isMobileMenuOpen) {
            return 'text-black hover:text-gray-500';
        }
        return isTransparent
            ? 'text-white hover:text-gray-500'
            : 'text-black hover:text-gray-500';
    };

    const linkClass = `px-4 font-bold ${getLinkClass()}`;

    return (
        <>
            <HashLink
                className={linkClass}
                smooth to="/#about"
                scroll={scrollWithOffset}
            >
                About
            </HashLink>
            <HashLink
                className={linkClass}
                smooth to="/#partners"
                scroll={scrollWithOffset}
            >
                Our Partners
            </HashLink>
            <HashLink
                className={linkClass}
                smooth to="/#getinvolved"
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
