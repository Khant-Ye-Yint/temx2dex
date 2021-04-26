import React from 'react';

const TemtemStats = ({ stats }) => {
	return (
		<div className='flex flex-col justify-center items-center space-y-3 w-full'>
			<h1 className='text-2xl text-green font-bold'>Stats</h1>
			<div className='stat-row'>
				<h1 className='text-green text-xl'>HP</h1>
				<h1 className='text-green text-xl'>{stats.hp}</h1>
				<span
					className='h-6 bg-yellow col-span-2'
					style={{ width: `${stats.hp}%` }}
				></span>

				<h1 className='text-green text-xl'>STA</h1>
				<h1 className='text-green text-xl'>{stats.sta}</h1>
				<span
					className='h-6 bg-yellow col-span-2'
					style={{ width: `${stats.sta}%` }}
				></span>

				<h1 className='text-green text-xl'>SPD</h1>
				<h1 className='text-green text-xl'>{stats.spd}</h1>
				<span
					className='h-6 bg-yellow col-span-2'
					style={{ width: `${stats.spd}%` }}
				></span>

				<h1 className='text-green text-xl'>ATK</h1>
				<h1 className='text-green text-xl'>{stats.atk}</h1>
				<span
					className='h-6 bg-yellow col-span-2'
					style={{ width: `${stats.atk}%` }}
				></span>

				<h1 className='text-green text-xl'>DEF</h1>
				<h1 className='text-green text-xl'>{stats.def}</h1>
				<span
					className='h-6 bg-yellow col-span-2'
					style={{ width: `${stats.def}%` }}
				></span>

				<h1 className='text-green text-xl'>SPATK</h1>
				<h1 className='text-green text-xl'>{stats.spatk}</h1>
				<span
					className='h-6 bg-yellow col-span-2'
					style={{ width: `${stats.spatk}%` }}
				></span>

				<h1 className='text-green text-xl'>SPDEF</h1>
				<h1 className='text-green text-xl'>{stats.spdef}</h1>
				<span
					className='h-6 bg-yellow col-span-2'
					style={{ width: `${stats.spdef}%` }}
				></span>

				<h1 className='text-green text-xl'>TOTAL</h1>
				<h1 className='text-green text-xl'>{stats.total}</h1>
				<span
					className='h-6 bg-yellow col-span-2'
					style={{ width: `${stats.total / 7}%` }}
				></span>
			</div>
		</div>
	);
};

export default TemtemStats;
