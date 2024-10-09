import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 w-96">
        <h2 className="mb-6 text-2xl font-bold text-center dark:text-white">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white transition duration-200 bg-blue-600 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
