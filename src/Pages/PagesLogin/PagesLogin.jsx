import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/AuthOperation';
import {
	LoginContainer,
	LoginButton,
	LoginLabel,
	LoginForm,
	LoginInput,
} from './PagesLogin.styled';

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
		<LoginContainer>
			<LoginForm onSubmit={handelSubmit}>
				<LoginLabel>
					Email
					<LoginInput
						onChange={handelChange}
						type="email"
						name="email"
						value={email}
					/>
				</LoginLabel>
				<LoginLabel>
					Password
					<LoginInput
						onChange={handelChange}
						type="password"
						name="password"
						value={password}
					/>
				</LoginLabel>
				<LoginButton type="submit">LogIn</LoginButton>
			</LoginForm>
		</LoginContainer>
	);
}
