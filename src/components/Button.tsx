import React from 'react'

export const Button = ({
	color,
	bgColor,
	text,
	size,
	borderRadius,
}: {
	color: string
	bgColor: string
	text: string
	size: 'md' | 'lg' | 'xl'
	borderRadius: string
}) => {
	return (
		<button
			type='button'
			style={{
				backgroundColor: bgColor,
				color,
				borderRadius,
			}}
			className={`text-${size} p-3 hover:drop-shadow-xl`}>
			{text}
		</button>
	)
}
