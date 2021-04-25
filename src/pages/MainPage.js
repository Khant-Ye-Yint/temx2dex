import React, { useState, useEffect } from 'react';

import Title from '../components/Title';
import TemtemList from '../components/TemtemList';

import Loading from '../components/Loading';

import useFetchData from '../hooks/useFetchData';
import { AllTemtemApi } from '../Api';

const MainPage = () => {
	const [showSearch, setShowSearch] = useState(false);
	const [searchString, setSearchString] = useState('');
	const [temtemData, setTemtemData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

	const { temtemInfo, loading } = useFetchData({ url: AllTemtemApi });

	useEffect(() => {
		setTemtemData(temtemInfo);
	}, [temtemInfo]);

	useEffect(() => {
		const result = temtemData.filter((chunk) =>
			chunk.name.toLowerCase().includes(searchString.toLowerCase())
		);
		setFilteredData(result);
	}, [temtemData, searchString]);

	return (
		<div>
			<Title
				showSearch={showSearch}
				setShowSearch={setShowSearch}
				setSearchString={setSearchString}
			/>
			{loading ? <Loading /> : <TemtemList data={filteredData} />}
		</div>
	);
};

export default MainPage;
