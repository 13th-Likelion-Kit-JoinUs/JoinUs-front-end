import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../doamin/home/Home';
import NotFound from '../../doamin/shared/NotFound';
import Question from '../../doamin/question/QuestionPage';
import LoadingPage from '../../doamin/loading/LoadingPage';
import ResultPage from '../../doamin/result/ResultPage';

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/question" element={<Question />} />
			<Route path="/loading" element={<LoadingPage />} />
			<Route path="/result" element={<ResultPage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;
