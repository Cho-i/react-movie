import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

function useFetch(url) {
	/**
	 * 테스트 중...
	 */
	//const { sort } = useParams();
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	//const [page, setPage] = useState(1);

	//const [data, setData] = useState([]);

	// const getMovies = async () => {
	// 	setLoading(true);
	// 	try {
	// 		const query = (sort === 'all') ? '' : `sort_by=${sort}`;
	// 		const res = await axios.get(
	// 			`https://yts.mx/api/v2/list_movies.json?${query}&page=${page}`,
	// 		);
	// 		setMovies(res.data.data.movies);
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// 	setLoading(false);
	// }

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await axios.get(url);
				setMovies(res.data.data.movies);
			} catch (e) {
				console.log(e);
			}
			setLoading(false);
		}
	}, [url]);

	//return data;

}

export default useFetch;