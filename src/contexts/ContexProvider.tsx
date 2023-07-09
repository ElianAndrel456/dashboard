import { createContext, useContext, useEffect, useState } from 'react'

const stateContext = createContext<{
	activeMenu: boolean
	setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>
	isClicked: {
		chat: boolean
		cart: boolean
		profile: boolean
		notification: boolean
	}
	setIsClicked: React.Dispatch<
		React.SetStateAction<{
			chat: boolean
			cart: boolean
			profile: boolean
			notification: boolean
		}>
	>
	handleClick: (clicked: Clicked) => void
	screenSize: number | null
	setScreenSize: React.Dispatch<React.SetStateAction<number | null>>
}>({
	handleClick: () => {},
	activeMenu: false,
	setActiveMenu: () => {},
	isClicked: {
		chat: false,
		cart: false,
		profile: false,
		notification: false,
	},
	setIsClicked: () => {},
	screenSize: null,
	setScreenSize: () => {},
})

const initialState = {
	chat: false,
	cart: false,
	profile: false,
	notification: false,
}

type Clicked = 'chat' | 'cart' | 'profile' | 'notification'

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [activeMenu, setActiveMenu] = useState(false)
	const [isClicked, setIsClicked] = useState(initialState)
	const [screenSize, setScreenSize] = useState<number | null>(null)

	const handleClick = (clicked: Clicked) => {
		setIsClicked({ ...initialState, [clicked]: true })
	}

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth)
		window.addEventListener('resize', handleResize)
		handleResize()
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		if (screenSize && screenSize > 900) setActiveMenu(true)
		else setActiveMenu(false)
	}, [screenSize])

	return (
		<stateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				isClicked,
				setIsClicked,
				handleClick,
				screenSize,
				setScreenSize,
			}}>
			{children}
		</stateContext.Provider>
	)
}

export const useStateContext = () => useContext(stateContext)
