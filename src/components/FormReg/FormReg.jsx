import './FormReg.css'
// /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ - reg exp email
// /^[a-zA-Z0-9!@#$%^&*]{6,16}$/ - reg exp password

function FormReg() {

	return (
		<div className="form-block">
			<h1 className="form-block__title">Create Account</h1>
			<form className="form">
				<div className="from-row">
					<label htmlFor="name" className="form-label">Name and Surname</label>
					<input name="user-name" placeholder="Enter your name and surname" type="text" className="form-input" />
				</div>
				<div className="from-row">
					<label htmlFor="user-email" className="form-label">Email Address</label>
					<input name="user-email" placeholder="Enter your email address" type="text" className="form-input" />
				</div>
				<div className="from-row">
					<label htmlFor="user-password" className="form-label">Password</label>
					<input name="user-password" placeholder="Enter your password" type="text" className="form-input" />
				</div>
				<div className="from-row">
					<label htmlFor="confirm-password" className="form-label">Confirm Password</label>
					<input name="confirm-password" placeholder="Confirm your password" type="text" className="form-input" />
				</div>
				<div className="from-row">
					<label htmlFor="graduation-date" className="form-label">Graduation date</label>
					<select name="graduation-date" className="form-select">
						<option selected disabled>Graduation date</option>
						<option value="2026">2026</option>
						<option value="2028">2028</option>
					</select>
				</div>
				<button type="submit" className="form-button button">Send</button>
				<button type="button" className="form-button button">Clear</button>
				<div className="form-info c-red">Проверьте заполнение формы</div>
				<div className="form-info c-green">Данные успешно отправлена</div>
			</form>
		</div>
	)
}

export default FormReg