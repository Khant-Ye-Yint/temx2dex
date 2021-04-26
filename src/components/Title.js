import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { MdSearch, MdClose } from 'react-icons/md';

const Title = ({ showSearch, setShowSearch, setSearchString }) => {
	const handleChange = (e) => {
		setSearchString(e.target.value);
	};

	return (
		<div className='title'>
			<Link className='cursor-pointer' to='/'>
				TEMX2DEX
			</Link>

			{showSearch ? (
				<div className='neumorphism-small flex justify-between items-center px-3'>
					<motion.input
						type='string'
						className='bg-space outline-none border-none text-xl px-3 h-10'
						onChange={handleChange}
						autoFocus
						initial={{ width: 0 }}
						animate={{ width: '10rem' }}
					/>

					<MdClose
						className='cursor-pointer text-2xl'
						onClick={() => setShowSearch(false)}
					/>
				</div>
			) : (
				<motion.div
					className='w-10 h-10 neumorphism-small flex justify-center items-center cursor-pointer'
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => {
						setShowSearch(true);
						setSearchString('');
					}}
				>
					<MdSearch className='text-2xl' />
				</motion.div>
			)}
		</div>
	);
};

export default Title;
