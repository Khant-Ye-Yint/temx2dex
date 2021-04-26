import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import TemDetailTitle from '../components/TemDetailTitle';
import Loading from '../components/Loading';

import { SpecificTemApi } from '../Api';
import useFetchData from '../hooks/useFetchData';

const TemtemDetail = ({ match }) => {
	const { number } = match.params;
	const url = SpecificTemApi(number);
	const { temtemInfo, loading } = useFetchData({ url: url });

	const [data, setData] = useState([]);

	useEffect(() => {
		setData(temtemInfo);
	}, [temtemInfo]);

	return (
		<div>
			<TemDetailTitle name={data.name} number={number} />
			{loading ? (
				<Loading />
			) : (
				<motion.div
					className='flex flex-col justify-center items-center space-y-10 w-full sm:space-y-5'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<div className='flex flex-col lg:flex-row justify-around items-center mt-5 space-y-10 flex-wrap w-full'>
						<div className='flex flex-col justify-center items-center space-y-3 sm:w-full lg:w-1/2'>
							<img
								src={data.portraitWikiUrl}
								alt={data.name}
								className='lg:w-1/3 sm:w-1/2 rounded'
							/>
							<div className='flex space-x-2 justify-center items-center'>
								{data.types.map((type) => (
									<span className='type'>{type}</span>
								))}
							</div>
						</div>
						<div className='flex flex-col justify-center items-center space-y-3 sm:w-full lg:w-1/2'>
							<h1 className='text-2xl text-green font-bold'>Traits</h1>
							{data.traits.map((trait) => (
								<span className='text-yellow text-xl'>{trait}</span>
							))}
						</div>
					</div>
					<div className='flex flex-col justify-center items-center space-y-3 w-full'>
						<h1 className='text-2xl text-green font-bold'>Stats</h1>
						<div className='stat-row'>
							<h1 className='text-green text-xl'>HP</h1>
							<h1 className='text-green text-xl'>{data.stats.hp}</h1>
							<span
								className='h-6 bg-yellow col-span-2'
								style={{ width: `${data.stats.hp}%` }}
							></span>

							<h1 className='text-green text-xl'>STA</h1>
							<h1 className='text-green text-xl'>{data.stats.sta}</h1>
							<span
								className='h-6 bg-yellow col-span-2'
								style={{ width: `${data.stats.sta}%` }}
							></span>

							<h1 className='text-green text-xl'>SPD</h1>
							<h1 className='text-green text-xl'>{data.stats.spd}</h1>
							<span
								className='h-6 bg-yellow col-span-2'
								style={{ width: `${data.stats.spd}%` }}
							></span>

							<h1 className='text-green text-xl'>ATK</h1>
							<h1 className='text-green text-xl'>{data.stats.atk}</h1>
							<span
								className='h-6 bg-yellow col-span-2'
								style={{ width: `${data.stats.atk}%` }}
							></span>

							<h1 className='text-green text-xl'>DEF</h1>
							<h1 className='text-green text-xl'>{data.stats.def}</h1>
							<span
								className='h-6 bg-yellow col-span-2'
								style={{ width: `${data.stats.def}%` }}
							></span>

							<h1 className='text-green text-xl'>SPATK</h1>
							<h1 className='text-green text-xl'>{data.stats.spatk}</h1>
							<span
								className='h-6 bg-yellow col-span-2'
								style={{ width: `${data.stats.spatk}%` }}
							></span>

							<h1 className='text-green text-xl'>SPDEF</h1>
							<h1 className='text-green text-xl'>{data.stats.spdef}</h1>
							<span
								className='h-6 bg-yellow col-span-2'
								style={{ width: `${data.stats.spdef}%` }}
							></span>

							<h1 className='text-green text-xl'>TOTAL</h1>
							<h1 className='text-green text-xl'>{data.stats.total}</h1>
							<span
								className='h-6 bg-yellow col-span-2'
								style={{ width: `${data.stats.total / 7}%` }}
							></span>
						</div>
					</div>
				</motion.div>
			)}
		</div>
	);
};

export default TemtemDetail;
