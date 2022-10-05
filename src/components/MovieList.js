import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Container, Row } from 'react-bootstrap';
import MovieItem from './MovieItem';
import Loading from './Loading';

function MovieList() {
	const { sort } = useParams();
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);

	const getMovies = async () => {
		setLoading(true);
		try {
			const query = (sort === 'all') ? '' : `sort_by=${sort}`;
			const res = await axios.get(
				`https://yts.mx/api/v2/list_movies.json?${query}&page=${page}`,
			);
			setMovies(res.data.data.movies);
		} catch (e) {
			console.log(e);
		}
		setLoading(false);
	}

	useEffect(() => {
		getMovies();
	}, [sort]);

	//console.log(sort)

	return (
		<>
			<Container className="mt-4">
				<Row xs={1} md={2} className="g-4">
					{
						movies.map((movie, i) => {
							return (
								<MovieItem movie={movie} key={movie.id} />
							)
						})
					}
				</Row>
				{
					(loading === true) ? <Loading /> : null
				}
			</Container>
		</>
	)
}

export default MovieList;