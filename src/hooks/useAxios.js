import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Axios custom hooks
 */

function useAxios(url) {
	const [res, setRes] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchData(url);
	}, [url]);

	const fetchData = async () => {
		setLoading(true);
		try {
			const res = await axios.get(url);
			setRes(res.data.data);
		} catch (e) {
			console.log(e);
		}
		setLoading(false);
	}

	return [res, loading];

}

export default useAxios;