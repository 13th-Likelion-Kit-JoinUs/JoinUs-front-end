import React from 'react';
import TextBoard from '../home/components/TextBoard';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
	const navigate = useNavigate();
	setTimeout(() => {
		navigate('/result');
	}, 3000);
	return (
		<div className="flex flex-col h-screen items-center justify-around">
			<img
				className="w-[150px] h-[150px]"
				src="assets/img/loading_lion.gif"
				alt="loading_lion"
			/>
			<TextBoard text="...오잉 ? 아기사자의 모습이!!!" />
		</div>
	);
};

export default LoadingPage;
