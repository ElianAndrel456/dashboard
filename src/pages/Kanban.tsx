import React from 'react'
import { Header } from '../components/Header'
import { ColumnDirective, ColumnsDirective, KanbanComponent } from '@syncfusion/ej2-react-kanban'
import { kanbanData, kanbanGrid } from '../data/dummy'

export const Kanban = () => {
	return (
		<div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
			<Header
				category='App'
				title='Kanban'
			/>
			<KanbanComponent
				id='kaban'
				dataSource={kanbanData}
				cardSettings={{
					contentField: 'Summary',
					headerField: 'Id',
				}}
				keyField='Status'>
				<ColumnsDirective>
					{kanbanGrid.map((item, index) => (
						<ColumnDirective
							key={index}
							{...item}
						/>
					))}
				</ColumnsDirective>
			</KanbanComponent>
		</div>
	)
}
