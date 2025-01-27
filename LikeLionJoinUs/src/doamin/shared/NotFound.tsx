import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();

	const goHome = () => {
		navigate('/');
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
			<h1 className="text-9xl font-bold text-gray-800">404</h1>
			<p className="text-xl text-gray-600 mt-4">Page Not Found</p>
			<button
				onClick={goHome}
				className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition"
			>
				Go to Home
			</button>
		</div>
	);
};

export default NotFound;
