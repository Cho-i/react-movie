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
			const mergedData = [...movies, ...res.data.data.movies]
			setMovies(mergedData)
			//setMovies(res.data.data.movies);
		} catch (e) {
			console.log(e);
		}
		setLoading(false);
	}

	useEffect(() => {
		getMovies();
	}, [sort, page]);

	// console.log(sort)

	// 스크롤 이벤트 핸들러
	const handleScroll = () => {
		const scrollHeight = document.documentElement.scrollHeight;
		const scrollTop = document.documentElement.scrollTop;
		const clientHeight = document.documentElement.clientHeight;
		if (scrollTop + clientHeight >= scrollHeight && loading === false) {
			// 페이지 끝에 도달하면 추가 데이터를 받아온다
			setPage(page + 1);
		}
	};

	useEffect(() => {
		// scroll event listener 등록
		window.addEventListener("scroll", handleScroll);
		return () => {
			// scroll event listener 해제
			window.removeEventListener("scroll", handleScroll);
		};
	})

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