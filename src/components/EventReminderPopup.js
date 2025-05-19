import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, query, orderBy, where } from 'firebase/firestore';

const EventReminderPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [upcomingEvent, setUpcomingEvent] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // Fetch upcoming events (next 7 days)
    useEffect(() => {
        const today = new Date();
        const nextWeek = new Date();
        nextWeek.setDate(today.getDate() + 45);

        const q = query(
            collection(db, 'events'),
            where('date', '>=', today.toISOString().split('T')[0]),
            where('date', '<=', nextWeek.toISOString().split('T')[0]),
            orderBy('date', 'asc')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const events = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                formattedDate: new Date(doc.data().date).toLocaleDateString('en-US', {
                    timeZone: 'UTC',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
            }));

            if (events.length > 0) {
                setUpcomingEvent(events[0]); // Show the nearest upcoming event
            }
            setIsLoaded(true);
        });

        return unsubscribe;
    }, []);

    // Show popup after delay if there's an upcoming event
    useEffect(() => {
        if (isLoaded && upcomingEvent) {
            const timer = setTimeout(() => {
                setShowPopup(true);
            }, 5000); // 10 seconds delay

            return () => clearTimeout(timer);
        }
    }, [isLoaded, upcomingEvent]);

    const handleClose = () => {
        setShowPopup(false);
    };

    if (!showPopup || !upcomingEvent) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
            <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-80 overflow-hidden">
                <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-gray-800">Upcoming Event!</h3>
                        <button
                            onClick={handleClose}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            &times;
                        </button>
                    </div>
                    <p className="text-gray-600 mb-2">
                        <span className="font-semibold">{upcomingEvent.title}</span> on {upcomingEvent.formattedDate}
                    </p>
                    {upcomingEvent.link && (
                        <a
                            href={upcomingEvent.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors mt-3"
                        >
                            Sign Up Now
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventReminderPopup;