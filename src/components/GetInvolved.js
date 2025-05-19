import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import EventsList from './EventsList'; // Adjust path if needed

const GetInvolved = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Validate email format
    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Handle email sign-up form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !isValidEmail(email)) {
            setMessage('Please enter a valid email address.');
            return;
        }

        try {
            await addDoc(collection(db, 'subscribers'), {
                email,
                timestamp: new Date().toISOString()
            });
            setMessage('Thank you for signing up!');
            setEmail('');
        } catch (error) {
            setMessage('Error signing up. Please try again.');
            console.error('Error adding email:', error);
        }
    };

    return (
        <section id="getinvolved" className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-black">
                    Get Involved
                </h2>

                {/* Sign-up form */}
                <div className="text-center mb-12">
                    <p className="text-lg text-gray-700 mb-4">
                        Sign up to hear about new events:
                    </p>
                    <form onSubmit={handleSubmit} className="flex justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-64 p-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-black text-white py-3 px-6 rounded-r-lg hover:bg-gray-800 transition-colors font-medium"
                        >
                            Sign Up
                        </button>
                    </form>
                    {message && <p className="mt-4 text-gray-700">{message}</p>}
                </div>

                {/* Events List */}
                <div className="mt-16">
                    <EventsList />
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;
