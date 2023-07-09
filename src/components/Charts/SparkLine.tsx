import React from 'react'
import { Inject, SparklineComponent, SparklineTooltip } from '@syncfusion/ej2-react-charts'
export const SparkLine = ({
	data,
	color,
	id,
	height,
	width,
	type,
	currentColor,
}: {
	data: { x: number; yval: number }[]
	color: string
	id: string
	height: string
	width: string
	type: 'Line' | 'Column' | 'WinLoss' | 'Pie' | 'Area' | undefined
	currentColor: string
}) => {
	return (
		<SparklineComponent
			id={id}
			height={height}
			width={width}
			lineWidth={1}
			valueType='Numeric'
			fill={color}
			border={{ color: currentColor, width: 2 }}
			dataSource={data}
			xName='x'
			yName='y'
			type={type}
			tooltipSettings={{
				visible: true,
				format: '${x} : ${y}',
				trackLineSettings: {
					visible: true,
				},
			}}>
			<Inject services={[SparklineTooltip]} />
		</SparklineComponent>
	)
}
