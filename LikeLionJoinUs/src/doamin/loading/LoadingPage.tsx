import React from 'react';
import TextBoard from '../home/components/TextBoard';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

type scoretype = {
	scorePlanning: number;
	scoreDesign: number;
	scoreFront: number;
	scoreBack: number;
};

const LoadingPage = () => {
	const location = useLocation();
	const scores: scoretype = location.state.value;
	const navigate = useNavigate();

	const maxScore = Math.max(...Object.values(scores));

	const normalizedScores = Object.fromEntries(
		Object.entries(scores).map(([key, value]) => [
			key,
			Math.floor((value / maxScore) * 5),
		]),
	);

	console.log(normalizedScores);

	setTimeout(() => {
		navigate(
			`/result?planning=${normalizedScores.scorePlanning}&analysis=${normalizedScores.scoreBack}&practice=${normalizedScores.scoreFront}&creative=${normalizedScores.scoreDesign}`,
		);
	}, 3000);

	return (
		<div className="flex flex-col h-screen items-center justify-around">
			<img
				className="w-[12rem] h-[12rem]"
				src="assets/img/loading_lion.gif"
				alt="loading_lion"
			/>
			<TextBoard text="...오잉 ? 아기사자의 모습이!!!" />
		</div>
	);
};

export default LoadingPage;
