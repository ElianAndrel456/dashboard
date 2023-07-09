import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Ecommerce } from './pages/Ecommerce'
import { Orders } from './pages/Orders'
import { Employees } from './pages/Employees'
import { Kanban } from './pages/Kanban'
import { Editor } from './pages/Editor'
import { Customers } from './pages/Customers'
import { Calendar } from './pages/Calendar'
import { ColorPicker } from './pages/ColorPicker'
import { Line } from './pages/charts/Line'
import { Area } from './pages/charts/Area'
import { Bar } from './pages/charts/Bar'
import { Pie } from './pages/charts/Pie'
import { Financial } from './pages/charts/Financial'
import { ColorMapping } from './pages/charts/ColorMapping'
import { Pyramid } from './pages/charts/Pyramid'
import { Stacked } from './pages/charts/Stacked'
import { NavBar } from './components/NavBar'
import { SideBar } from './components/SideBar'
import { useStateContext } from './contexts/ContexProvider'

function App() {
	const { activeMenu } = useStateContext()

	return (
		<div>
			<BrowserRouter>
				<div className='flex relative dark:bg-main-dark-bg'>
					<div
						className='fixed right-4 bottom-4'
						style={{ zIndex: '1000' }}>
						<TooltipComponent
							content={'Settings'}
							position='TopCenter'>
							<button
								type='button'
								className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
								style={{ background: 'blue', borderRadius: '50%' }}>
								<FiSettings />
							</button>
						</TooltipComponent>
					</div>
					{activeMenu ? (
						<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
							<SideBar />
						</div>
					) : (
						<div className='w-0 dark:bg-secondary-dark-bg '>
							<SideBar />
						</div>
					)}
					<div
						className={`
            dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
            ${activeMenu ? 'md:ml-72' : ' flex-2'}`}>
						<NavBar />
						<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'></div>

						<div>
							<Routes>
								{/* Dashboard */}
								<Route
									path='/'
									element={<Ecommerce />}
								/>
								<Route
									path='/ecommerce'
									element={<Ecommerce />}
								/>
								{/* Pages */}
								<Route
									path='/orders'
									element={<Orders />}
								/>
								<Route
									path='/employees'
									element={<Employees />}
								/>
								<Route
									path='/customers'
									element={<Customers />}
								/>
								{/* Apps */}
								<Route
									path='/kanban'
									element={<Kanban />}
								/>
								<Route
									path='/editor'
									element={<Editor />}
								/>
								<Route
									path='/calendar'
									element={<Calendar />}
								/>
								<Route
									path='/color-picker'
									element={<ColorPicker />}
								/>
								{/* Charts */}
								<Route
									path='/line'
									element={<Line />}
								/>
								<Route
									path='/area'
									element={<Area />}
								/>
								<Route
									path='/bar'
									element={<Bar />}
								/>
								<Route
									path='/pie'
									element={<Pie />}
								/>
								<Route
									path='/financial'
									element={<Financial />}
								/>
								<Route
									path='/color-mapping'
									element={<ColorMapping />}
								/>
								<Route
									path='/pyramid'
									element={<Pyramid />}
								/>
								<Route
									path='/stacked'
									element={<Stacked />}
								/>
							</Routes>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
