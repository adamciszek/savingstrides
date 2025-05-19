import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const AddEventForm = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'events'), {
                title,
                date,
                link,
                timestamp: serverTimestamp()
            });
            setTitle('');
            setDate('');
            setLink('');
            alert('Event added successfully!');
        } catch (error) {
            alert(`Error adding event: ${error.message}`);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mb-12 mt-12 p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create New Event</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Event Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    />
                </div>

                <div>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    />
                </div>

                <div>
                    <input
                        type="url"
                        placeholder="Event Link (e.g. https://example.com)"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                    Publish Event
                </button>
            </form>
        </div>
    );
};

export default AddEventForm;
