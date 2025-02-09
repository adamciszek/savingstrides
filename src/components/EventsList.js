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
        <div className="space-y-6">
            {events.length === 0 ? (
                <p className="text-center text-gray-700 text-lg">Coming soon...</p>
            ) : (
                events.map((event) => (
                    <div key={event.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-black mb-2">{event.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{event.formattedDate}</p>
                        {/* Use <pre> or CSS to preserve line breaks */}
                        <pre className="text-gray-700 whitespace-pre-wrap font-sans">
                            {event.description}
                        </pre>
                    </div>
                ))
            )}
        </div>
    );
};

export default EventsList;