import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, query, orderBy, addDoc } from 'firebase/firestore';

const GetInvolved = () => {
    const [events, setEvents] = useState([]);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Fetch events from Firestore
    useEffect(() => {
        const q = query(collection(db, 'events'), orderBy('timestamp', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const eventsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                formattedDate: new Date(doc.data().date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
            }));
            setEvents(eventsData);
        });
        return unsubscribe;
    }, []);

    // Validate email format
    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
        return regex.test(email);
    };

    // Handle email sign-up form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate email
        if (!email || !isValidEmail(email)) {
            setMessage('Please enter a valid email address.');
            return;
        }

        try {
            // Add email to Firestore
            await addDoc(collection(db, 'subscribers'), {
                email: email,
                timestamp: new Date().toISOString() // Optional: Add a timestamp
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

                {/* Events list */}
                <div className="space-y-12">
                    {events.length === 0 ? (
                        <p className="text-center text-gray-700 text-lg">
                            Stay tuned for upcoming events!
                        </p>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {events.map((event) => (
                                <div
                                    key={event.id}
                                    className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="p-6">
                                        <div className="mb-4">
                                            <span className="text-sm font-medium text-gray-600">
                                                {event.formattedDate}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-black mb-3">
                                            {event.title}
                                        </h3>
                                        {/* Use <pre> to preserve line breaks */}
                                        <pre className="text-gray-700 leading-relaxed whitespace-pre-wrap font-sans">
                                            {event.description}
                                        </pre>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;