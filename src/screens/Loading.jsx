import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
    const navigate = useNavigate()

    useEffect(() => {
        checkUser()
    }, [])

    const checkUser = async () => {
        const userId = await localStorage.getItem('userId');
        if (userId !== null) navigate("/home")
        else navigate("/login")
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
                <span className="text-lg font-semibold text-indigo-500">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;