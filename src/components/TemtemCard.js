import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { SpecificTemtemRoute } from '../Routes';

const TemtemCard = ({ name, types, imgUrl, number }) => {
	return (
		<motion.div layout whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
			<Link
				to={SpecificTemtemRoute(number)}
				className='w-30 flex justify-between items-center w-72 h-28 neumorphism-small px-5 text-green cursor-pointer'
			>
				<div className='flex flex-col justify-center items-start space-y-1'>
					<h1 className='text-2xl font-semibold'>{name}</h1>
					{types.map((type) => (
						<span className='type' key={type}>
							{type}
						</span>
					))}
				</div>
				<img src={imgUrl} alt={name} className='h-full' />
			</Link>
		</motion.div>
	);
};

export default TemtemCard;
