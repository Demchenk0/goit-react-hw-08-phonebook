import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/Auth/AuthSelectors';
import { logOut } from './../../redux/Auth/AuthOperation';
import { UserContainer, UserText, UserButton } from './UserMenu.styled';

export function UserMenu() {
	const dispatch = useDispatch();

	const name = useSelector(getUserName);
	return (
		<UserContainer>
			<UserText>Hi, {name}</UserText>
			<UserButton
				type="button"
				onClick={() => {
					dispatch(logOut());
				}}
			>
				Logout
			</UserButton>
		</UserContainer>
	);
}
