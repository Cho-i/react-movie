import './App.scss';
import { useEffect, useState } from 'react';
//import { Container, Row } from 'react-bootstrap';
import axios from "axios";
import MovieList from './components/MovieList';
import Gnb from './components/Gnb';

function App() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	const getMovies = async () => {
		try {
			const res = await axios.get(
				`https://yts.mx/api/v2/list_movies.json?sort_by=year`,
			);
			//console.log(res.data.data.movies);
			setMovies(res.data.data.movies);
			setLoading(false);
		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div className="App">
			<Gnb />
			<MovieList movies={movies} />
		</div>
	);
}

export default App;
