import { getIsLoggedIn } from './../../redux/Auth/AuthSelectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export function PublicRoute({ children, restricted = false, redirect = '/' }) {
	const IsLoggedIn = useSelector(getIsLoggedIn);
	const isNavigate = IsLoggedIn && restricted;
	return <>{isNavigate ? <Navigate to={redirect} /> : children}</>;
}

PublicRoute.propTypes = {
	children: PropTypes.object.isRequired,
	redirect: PropTypes.string,
	restricted: PropTypes.bool,
};
