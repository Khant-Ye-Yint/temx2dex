import React from 'react';
import { MdCached } from 'react-icons/md';
import { motion } from 'framer-motion';

const Loading = () => {
	return (
		<motion.div
			className='w-full flex justify-center items-center'
			animate={{ rotate: 360 }}
			transition={{
				loop: Infinity,
				duration: 1,
				ease: 'linear',
			}}
		>
			<MdCached className='text-center w-full text-4xl text-green' />
		</motion.div>
	);
};

export default Loading;
