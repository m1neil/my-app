import './App.css'
import MyName from '../MyName/myName'

function App() {
	return (
		<div className='app'>
			<div className='app-container'>
				<h1>Привет React</h1>
				<p>Это мой первый проект на React + Vite</p>
				<p>New line</p>
				<MyName />
			</div>
		</div>
	)
}

export default App
