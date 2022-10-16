import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/Auth/AuthSelectors';
import { logOut } from './../../redux/Auth/AuthOperation';

export function UserMenu() {
	const dispatch = useDispatch();

	const name = useSelector(getUserName);
	return (
		<div>
			<p>Hi, {name}</p>
			<button
				type="button"
				onClick={() => {
					dispatch(logOut());
				}}
			>
				Logout
			</button>
		</div>
	);
}
