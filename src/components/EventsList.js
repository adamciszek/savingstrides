import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

const EventsList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'events'), orderBy('timestamp', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const eventsData = snapshot.docs.map((doc) => ({
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.length === 0 ? (
                <p className="text-center text-gray-700 text-lg col-span-full">Coming soon...</p>
            ) : (
                events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                    >
                        <div className="p-6 flex-grow">
                            <p className="text-sm text-gray-600 mb-4">{event.formattedDate}</p>
                            <h3 className="text-xl font-bold text-black mb-4">{event.title}</h3>
                        </div>
                        <div className="p-6 pt-0">
                            {event.link ? (
                                <a
                                    href={event.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block w-full text-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors text-sm"
                                >
                                    View Event ↗
                                </a>
                            ) : (
                                <p className="text-gray-500 italic text-sm">No link provided</p>
                            )}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
;
};

export default EventsList;
