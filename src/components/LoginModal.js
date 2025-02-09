import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

const LoginModal = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            onClose(); // Close the modal on successful login
        } catch (error) {
            setError('Invalid email or password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setLoading(true);
        setError('');

        const provider = new GoogleAuthProvider();

        try {
            await signInWithPopup(auth, provider);
            onClose(); // Close the modal on successful login
        } catch (error) {
            setError('Failed to sign in with Google. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 w-96 rounded-lg relative">
                {/* Close Button (X) */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    aria-label="Close"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <h2 className="text-2xl font-bold mb-6 text-center text-black">Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mb-4 p-2 border border-black rounded-xl bg-transparent"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mb-4 p-2 border border-black rounded-xl bg-transparent"
                        required
                    />
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <button
                        type="submit"
                        className={`w-full px-4 py-2 rounded-xl transition-colors ${
                            loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800'
                        }`}
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-500">or</span>
                    <div className="flex-1 border-t border-gray-300"></div>
                </div>

                {/* Google Sign-In Button */}
                <button
                    onClick={handleGoogleSignIn}
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-xl bg-white text-gray-700 hover:bg-gray-100 transition-colors"
                    disabled={loading}
                >
                    <img
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        alt="Google Logo"
                        className="w-6 h-6 mr-2"
                    />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default LoginModal;