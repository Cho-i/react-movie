import './App.scss';
import { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import MovieList from './components/MovieList';
import Gnb from './components/Gnb';
import Error from './components/Error';

function App() {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/') {
			navigate('/all')
		}
	});

	return (
		<div className="App">
			<Gnb />
			<Routes>
				<Route path="/:sort" exact element={<MovieList />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
