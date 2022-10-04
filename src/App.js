import './App.scss';
import { Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import Gnb from './components/Gnb';
import Error from './components/Error';

function App() {

	return (
		<div className="App">
			<Gnb />
			<Routes>
				<Route path="/:sort" element={<MovieList />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
