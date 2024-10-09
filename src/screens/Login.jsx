import Swal from 'sweetalert2';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../database/firebase.config'; // Adjust the path as needed
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Swal.fire('Login Successful!');
            navigate('/home'); // Redirect to home or dashboard after login
        } catch (error) {
            Swal.fire({
                title: 'Login Failed!',
                text: error.message,
                icon: 'error',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return ( 
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        {isLoading ? (
                            <div className="w-full flex justify-center py-2">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" className='h-6 w-6' alt="Loading" />
                            </div>
                        ) : (
                            <button
                                className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-indigo-600"
                                type="submit"
                            >
                                Login
                            </button>
                        )}
                    </div>
                </form>
                <div className="mt-6 text-center flex justify-between">
                    
                    <Link className="text-sm text-indigo-900 hover:text-indigo-950"
                        to="/signup" 
                    >
                    
                        Don't have an account?
                    </Link>
                    <a className="text-sm text-indigo-500 hover:text-indigo-700" href="#">
                        Forgot password?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
