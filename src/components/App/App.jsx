import useLocalStorage from "../../assets/hooks/useLocalStorate"

const App = () => {
	const [amountDays, setAmountDays, resetAmountDays] = useLocalStorage('past-days', 0)

	const handleDaysChange = () => {
		setAmountDays(prevAmountDays => prevAmountDays + 1)
	}

	return (
		<div>
			<button onClick={handleDaysChange} type="button">Дней: {amountDays}</button>
			<button onClick={resetAmountDays} type="button">Сбросить</button>
		</div>
	)
}

export default App
