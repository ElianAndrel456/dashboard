import {
	Category,
	ChartComponent,
	Inject,
	Legend,
	SeriesCollectionDirective,
	SeriesDirective,
	StackingColumnSeries,
} from '@syncfusion/ej2-react-charts'
import { Tooltip } from '@syncfusion/ej2-react-popups'
import React from 'react'
import { stackedCustomSeries, stackedPrimaryXAxis } from '../../data/dummy'

export const Stacked = ({ width, height }: { width: string; height: string }) => {
	return (
		<ChartComponent
			width={width}
			height={height}
			id='charts'
			primaryXAxis={stackedPrimaryXAxis}
			primaryYAxis={stackedPrimaryXAxis}
			chartArea={{ border: { width: 0 } }}
			tooltip={{ enable: true }}
			legendSettings={{
				background: 'white',
			}}>
			<Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
			<SeriesCollectionDirective>
				{stackedCustomSeries.map((item, index) => (
					<SeriesDirective
						key={index}
						{...item}
					/>
				))}
			</SeriesCollectionDirective>
		</ChartComponent>
	)
}
