import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MovieItem from './MovieItem';
import Loading from './Loading';
import useAxios from '../hooks/useAxios';

function MovieList() {
	const { sort } = useParams();
	const [page, setPage] = useState(1);
	const query = (sort === 'all') ? '' : `sort_by=${sort}`;
	const [data, loading] = useAxios(`https://yts.mx/api/v2/list_movies.json?${query}&page=${page}`);
	const [movies, setMovies] = useState([]);

	/**
	 * handleScroll : 스크롤이 맨 하단일때 page 추가
	 */
	const handleScroll = () => {
		const scrollHeight = document.documentElement.scrollHeight;
		const scrollTop = document.documentElement.scrollTop;
		const clientHeight = document.documentElement.clientHeight;
		if (scrollTop + clientHeight >= scrollHeight && loading === false) {
			setPage(page + 1);
		}
	};

	/**
	 * window scroll event
	 */
	useEffect(() => {
		const timer = setInterval(() => {
			window.addEventListener("scroll", handleScroll);
		}, 100);
		return () => {
			clearInterval(timer);
			window.removeEventListener("scroll", handleScroll);
		};
	});

	useEffect(() => {
		if (page === 1) {
			setMovies(data.movies)
		} else {
			const mergedData = movies.concat(data.movies);
			setMovies(mergedData)
		}
	}, [data]);

	useEffect(() => {
		setPage(1);
		document.documentElement.scrollIntoView({ block: 'start' });
	}, [sort]);

	// 아직 movies 값이 설정되지 않았을 때
	if (!movies) {
		return null;
	}

	return (
		<>
			<Container className="mt-4 mb-4">
				<Row xs={1} md={4} className="g-4">
					{
						movies.map((movie, i) => {
							return (
								<MovieItem movie={movie} />
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