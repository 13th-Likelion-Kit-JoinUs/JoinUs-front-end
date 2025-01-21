import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../doamin/home/Home';
import NotFound from '../../doamin/shared/NotFound';

const AppRoutes: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;
