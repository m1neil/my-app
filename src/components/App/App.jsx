import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Homepage from '../pages/Homepage'
import './App.css'

function App() {
	return (
		<>
			<Header />
			<main className="page">
				<Homepage />
			</main>
			<Footer />
		</>
	)
}

export default App
