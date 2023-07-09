import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ContextProvider } from './contexts/ContexProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>
)

//remove message syncfusion
setTimeout(() => {
	//console.log()
	document.body.lastElementChild?.remove()
}, 100)
