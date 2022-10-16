import { getIsLoggedIn } from './../../redux/Auth/AuthSelectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function PublicRoute({ children, restricted = false, redirect = '/' }) {
	const IsLoggedIn = useSelector(getIsLoggedIn);
	const isNavigate = IsLoggedIn && restricted;
	return <>{isNavigate ? <Navigate to={redirect} /> : children}</>;
}
