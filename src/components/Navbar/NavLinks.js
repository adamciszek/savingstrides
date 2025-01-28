import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const offset = 150;
        window.scrollTo({ top: yCoordinate - offset, behavior: 'smooth' });
    };

    return (
        <>
            <HashLink
                className="px-4 font-extrabold text-gray-500 hover:text-black"
                smooth to="/#about"
                scroll={scrollWithOffset}
            >
                About
            </HashLink>
            <HashLink
                className="px-4 font-extrabold text-gray-500 hover:text-black"
                smooth to="/#partners"
                scroll={scrollWithOffset}
            >
                Our Partners
            </HashLink>
            <HashLink
                className="px-4 font-extrabold text-gray-500 hover:text-black"
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
    )
}

export default NavLinks;
