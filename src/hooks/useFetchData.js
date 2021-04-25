import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = ({ url }) => {
	const [loading, setLoading] = useState(true);
	const [temtemInfo, setTemtemInfo] = useState([]);

	useEffect(() => {
		setLoading(true);
		axios
			.get(url)
			.then((res) => {
				setTemtemInfo(res.data);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, [url, setLoading]);

	return { temtemInfo, loading };
};

export default useFetchData;
