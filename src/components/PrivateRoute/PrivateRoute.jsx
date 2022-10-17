import { getIsLoggedIn } from './../../redux/Auth/AuthSelectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export function PrivateRoute({ children, redirect }) {
	const IsLoggedIn = useSelector(getIsLoggedIn);
	return <> {IsLoggedIn ? children : <Navigate to={redirect} />} </>;
}

PrivateRoute.propTypes = {
	children: PropTypes.object.isRequired,
	redirect: PropTypes.string.isRequired,
};
