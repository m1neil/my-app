import "./Header.css"
import logo from '../../assets/react.svg'

export default function Header() {
	return (
		<>
			<header className="header">
				<div className="header-container">
					<a href="#" className="header-logo">
						<img src={logo} alt="logo" />
					</a>
					<ul className="header-menu menu">
						<li className="menu-item"><a href="#" className="menu-link">link 1</a></li>
						<li className="menu-item"><a href="#" className="menu-link">link 2</a></li>
						<li className="menu-item"><a href="#" className="menu-link">link 3</a></li>
						<li className="menu-item"><a href="#" className="menu-link">link 4</a></li>
						<li className="menu-item"><a href="#" className="menu-link">link 5</a></li>
					</ul>
				</div>
			</header>
		</>
	)
}