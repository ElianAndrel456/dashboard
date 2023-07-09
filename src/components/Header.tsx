import React from 'react'

export const Header = ({ category, title }: { category: string; title: string }) => {
	return (
		<div className='mt-10'>
			<p className='text-gray-400'>{category}</p>
			<p className='text-3xl font-extrabold tracking-tight text-slate-900'>{title}</p>
		</div>
	)
}
