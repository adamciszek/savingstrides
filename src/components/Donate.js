import React, { useState, useEffect } from 'react';
import { useDocTitle } from '../components/CustomHook';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

function ComingSoon() {
    useDocTitle('Saving Strides');

    const [text, setText] = useState('');
    const fullText = 'coming soon';

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < fullText.length) {
                setText((prev) => prev + fullText[index]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <NavBar />
            <div className="flex justify-center items-center min-h-screen bg-white">
                <h1 className="text-5xl font-mono">{text}</h1>
            </div>
            <Footer />
        </>
    );
}

export default ComingSoon;