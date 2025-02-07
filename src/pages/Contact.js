import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';

const Contact = () => {
    useDocTitle('contact us');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        emailjs.sendForm('service_gfhygmq', 'template_r0772gr', e.target, '8zZiGKytUjcIiqBXn')
            .then(() => {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', phone_number: '', message: '' });
            })
            .catch(() => setStatus('Failed to send message. Try again later.'));
    };

    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
                <div className="w-full max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center tracking-tight">
                        Get in Touch
                    </h2>
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl"
                    >
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                    required
                                    pattern="[0-9]{10}"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all"
                                    placeholder="xxxxxxxxxx"
                                    title="Please enter a valid phone number (xxxxxxxxxx)"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all h-40"
                                    placeholder="Write your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 transform hover:-translate-y-1"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>

                    {status && (
                        <div className="mt-6 p-4 text-center rounded-lg bg-gray-100 border border-gray-200">
                            <p className={`text-sm ${status.includes('success') ? 'text-gray-900' : 'text-gray-700'}`}>
                                {status}
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;