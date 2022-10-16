import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/AuthOperation';

export function PagesLogin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	function handelChange({ target: { name, value } }) {
		// todo значения что пропишут пользователи
		switch (name) {
			case 'email':
				setEmail(value);
				break;
			case 'password':
				setPassword(value);
				break;

			default:
				break;
		}
	}
	function handelSubmit(e) {
		e.preventDefault();
		// !===============Dispatch========

		dispatch(logIn({ email, password }));
		setEmail('');
		setPassword('');
	}
	return (
		<div>
			<form onSubmit={handelSubmit}>
				<label>
					Email
					<input
						onChange={handelChange}
						type="email"
						name="email"
						value={email}
					/>
				</label>
				<label>
					Password
					<input
						onChange={handelChange}
						type="password"
						name="password"
						value={password}
					/>
				</label>
				<button type="submit">LogIn</button>
			</form>
		</div>
	);
}
