import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/AuthOperation';

export function PagesRegister() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	function handelChange({ target: { name, value } }) {
		// todo значения что пропишут пользователи
		switch (name) {
			case 'name':
				setName(value);
				break;
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
		// !DISPATCH!!!!!!!!!!!!
		dispatch(register({ name, email, password }));
		setName('');
		setEmail('');
		setPassword('');
	}
	return (
		<div>
			<form onSubmit={handelSubmit}>
				<label>
					Name
					<input onChange={handelChange} type="text" name="name" value={name} />
				</label>
				<label></label>
				<label>
					Mail
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
				<button type="submit">Registration</button>
			</form>
		</div>
	);
}
