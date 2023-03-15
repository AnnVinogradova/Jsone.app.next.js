import { useState } from "react";

export default function InputForm({ getInputFormData }) {
	const [formOpen, setFormOpen] = useState(false)
	const [id, setId] = useState('')
	const [username, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [website, setWebsite] = useState('')

	const submitHandler = (evt) => {
		evt.preventDefault()
		getInputFormData({id, username, email, phone, website})
	}


	return <>
		<div>
			{!formOpen ?
				<button className="btn-add"
					type="button"
					onClick={() => { setFormOpen(true) }}>Добавить пользователя
				</button>
				: <form noValidate onSubmit={submitHandler}>
					<div>
						<div>
							<input type="text"
								placeholder="id" value={id}
								onChange={(evt) => { setId(evt.target.value) }}>
							</input>
						</div>
						<div>
							<input type="text"
								placeholder="username" value={username}
								onChange={(evt) => { setUserName(evt.target.value) }}>
							</input>
						</div>
						<div>
							<input type="text"
								placeholder="email" value={email}
								onChange={(evt) => { setEmail(evt.target.value) }}>
							</input>
						</div>
						<div>
							<input type="text"
								placeholder="phone" value={phone}
								onChange={(evt) => { setPhone(evt.target.value) }}>
							</input>
						</div>
						<div>
							<input type="text"
								placeholder="website" value={website}
								onChange={(evt) => { setWebsite(evt.target.value) }}>
							</input>
						</div>
					</div>
					<button type="submit" className="btn-submit">Submit form</button>
				</form>
			}
		</div>
	</>
}
