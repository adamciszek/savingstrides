import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

const GetInvolved = () => {
    const [events, setEvents] = useState([]);

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

    return (
        <section id="getinvolved" className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-black">
                    Get Involved
                </h2>

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
                                        <p className="text-gray-700 leading-relaxed">
                                            {event.description}
                                        </p>
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