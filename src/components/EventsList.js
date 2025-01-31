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
                ...doc.data()
            }));
            setEvents(eventsData);
        });

        return unsubscribe;
    }, []);

    return (
        <div>
            {events.length === 0 ? (
                <p>Coming soon...</p>
            ) : (
                events.map((event) => (
                    <div key={event.id}>
                        <h3>{event.title}</h3>
                        <p>Date: {event.date}</p>
                        <p>{event.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default EventsList;