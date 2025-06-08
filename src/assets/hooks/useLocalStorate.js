import { useEffect, useState } from "react"

const useLocalStorage = (key, initValue) => {

	const getValue = () => {
		return localStorage.getItem(key) ?? initValue
	}

	const resetValue = () => {
		setValue(initValue)
	}

	const [value, setValue] = useState(getValue)

	useEffect(() => {
		localStorage.setItem(key, value)
	}, [value])

	return [value, setValue, resetValue]
}

export default useLocalStorage