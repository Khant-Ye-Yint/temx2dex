import React from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

const TemDetailTitle = ({ name, number }) => {
	return (
		<Link className='title' to='/'>
			<motion.div
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className='w-10 h-10 neumorphism-small p-3'
			>
				<MdArrowBack />
			</motion.div>
			<h1 className='text-4xl'>{name}</h1>
			<h1 className='text-4xl text-yellow'>#{number}</h1>
		</Link>
	);
};

export default TemDetailTitle;
