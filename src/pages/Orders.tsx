import React from 'react'
import { Header } from '../components/Header'
import {
	GridComponent,
	ColumnDirective,
	ColumnsDirective,
	Inject,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	Page,
	ExcelExport,
	Edit,
	PdfExport,
} from '@syncfusion/ej2-react-grids'
import { ordersData, ordersGrid } from '../data/dummy'

export const Orders = () => {
	return (
		<div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
			<Header
				category='Page'
				title='Orders'
			/>
			<GridComponent
				id='gridcomp'
				dataSource={ordersData}
				allowPaging
				allowSorting
				allowFiltering>
				<ColumnsDirective>
					{ordersGrid.map((item, index) => (
						<ColumnDirective
							key={index}
							{...item}
						/>
					))}
				</ColumnsDirective>
				<Inject
					services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]}
				/>
			</GridComponent>
		</div>
	)
}
