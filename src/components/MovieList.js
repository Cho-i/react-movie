import { useEffect, useState } from 'react';
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

	/**
	 * 이게 맞는걸까
	 */
	const handleScroll = () => {
		const scrollHeight = document.documentElement.scrollHeight;
		const scrollTop = document.documentElement.scrollTop;
		const clientHeight = document.documentElement.clientHeight;
		if (scrollTop + clientHeight >= scrollHeight && loading === false) {
			setPage(page + 1);
		}
	};

	const query = (sort === 'all') ? '' : `sort_by=${sort}`;
	const getMovies = async () => {
		setLoading(true);
		try {
			const res = await axios.get(
				`https://yts.mx/api/v2/list_movies.json?${query}&page=${page}`,
			);
			setMovies(res.data.data.movies);
		} catch (e) {
			console.log(e);
		}
		setLoading(false);
	}
	const getMovies2 = async () => {
		setLoading(true);
		try {
			const res = await axios.get(
				`https://yts.mx/api/v2/list_movies.json?${query}&page=${page}`,
			);
			const mergedData = [...movies, ...res.data.data.movies]
			setMovies(mergedData)
		} catch (e) {
			console.log(e);
		}
		setLoading(false);
	}

	useEffect(() => {
		getMovies();
		document.documentElement.scrollIntoView({ block: 'start' });
	}, [sort]);

	useEffect(() => {
		getMovies2();
	}, [page]);

	useEffect(() => {
		const timer = setInterval(() => {
			window.addEventListener("scroll", handleScroll);
		}, 100);
		return () => {
			clearInterval(timer);
			window.removeEventListener("scroll", handleScroll);
		};
	});

	return (
		<>
			<Container className="mt-4 mb-4">
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