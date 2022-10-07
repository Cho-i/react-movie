import './App.scss';
import { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import MovieList from './components/MovieList';
import Gnb from './components/Gnb';
import Error from './components/Error';

function App() {
	const navigate = useNavigate();
	const location = useLocation();
	const path = location.pathname;

	useEffect(() => {
		if (path === '/') {
			navigate('/all')
		}
	});

	return (
		<div className="App">
			<Gnb />
			<Routes>
				<Route path="/:sort" exact element={<MovieList path={path} />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
