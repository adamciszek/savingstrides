import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import GetInvolved from '../components/GetInvolved';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Partners from '../components/Partners';
import AddEventForm from "../components/AddEventForm";


const Home = () => {
    const [user] = useAuthState(auth);

    return (
        <>
            <Hero />
            <Intro />
            <Partners />
            <GetInvolved />
            {/* Show AddEventForm only if user is logged in */}
            {user && <AddEventForm />}
            <Cta/>
            <Footer />
        </>
    );
};

export default Home;
