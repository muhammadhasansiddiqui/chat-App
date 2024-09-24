import React from 'react';

const Signup = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="mb-6 text-4xl font-bold text-blue-600">SIGNUP Page</h1>
            <form className="p-8 bg-white rounded shadow-md w-96">
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring"
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
