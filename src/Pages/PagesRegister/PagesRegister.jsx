import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/AuthOperation';
import {
	RegisterContainer,
	RegisterButton,
	RegisterLabel,
	RegisterForm,
	RegisterInput,
} from './PagesRegister.styled';

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
		<RegisterContainer>
			<RegisterForm onSubmit={handelSubmit}>
				<RegisterLabel>
					Name
					<RegisterInput
						onChange={handelChange}
						type="text"
						name="name"
						value={name}
					/>
				</RegisterLabel>
				{/* <label></label> */}
				<RegisterLabel>
					Mail
					<RegisterInput
						onChange={handelChange}
						type="email"
						name="email"
						value={email}
					/>
				</RegisterLabel>
				<RegisterLabel>
					Password
					<RegisterInput
						onChange={handelChange}
						type="password"
						name="password"
						value={password}
					/>
				</RegisterLabel>
				<RegisterButton type="submit">Registration</RegisterButton>
			</RegisterForm>
		</RegisterContainer>
	);
}
