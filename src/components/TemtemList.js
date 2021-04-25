import React from 'react';
import { motion } from 'framer-motion';

import TemtemCard from './TemtemCard';

const TemtemList = ({ data }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className='mt-10 px-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row w-full gap-5 items-center justify-center'
		>
			{data.map((info) => (
				<TemtemCard
					className='p-auto'
					key={info.number}
					number={info.number}
					name={info.name}
					types={info.types}
					imgUrl={info.portraitWikiUrl}
				/>
			))}
		</motion.div>
	);
};

export default TemtemList;
