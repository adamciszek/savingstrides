import React from 'react';
import GetInvolved from '../components/GetInvolved';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Partners from '../components/Partners';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Partners />
            <GetInvolved />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

