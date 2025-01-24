import React, { useState } from 'react';
import { useDocTitle } from '../components/CustomHook';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

function Donate() {
    const [donationAmount, setDonationAmount] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [donationStatus, setDonationStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Normally here you would integrate with a payment gateway or backend
        setDonationStatus(`Thank you for your donation of $${donationAmount}!`);
    };

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id="donate" className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={handleSubmit}>
                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-black uppercase text-4xl">
                                    Make a Donation
                                </h1>
                            </div>

                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input
                                        name="name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Full Name*"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        name="donationAmount"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number"
                                        placeholder="Donation Amount ($)*"
                                        value={donationAmount}
                                        onChange={(e) => setDonationAmount(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="my-4">
                                <textarea
                                    name="message"
                                    placeholder="Leave a message (optional)"
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                ></textarea>
                            </div>

                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button
                                    type="submit"
                                    className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-black text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                                >
                                    Donate Now
                                </button>
                            </div>
                        </div>
                    </form>

                    {donationStatus && (
                        <div className="mt-8 text-center text-xl font-semibold text-green-500">
                            {donationStatus}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Donate;
