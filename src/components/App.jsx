import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getIsFetchingCurrentUser } from 'redux/Auth/AuthSelectors';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/Auth/AuthOperation';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

// ?import { Home } from '../Pages/Home/Home';
const Home = lazy(() =>
	import('../Pages/Home/Home').then(module => ({
		...module,
		default: module.Home,
	}))
);

// ?import { PagesContact } from '../Pages/PagesContact/PagesContact';
const PagesContact = lazy(() =>
	import('../Pages/PagesContact/PagesContact').then(module => ({
		...module,
		default: module.PagesContact,
	}))
);

// ?import { PagesLogin } from '../Pages/PagesLogin/PagesLogin';
const PagesLogin = lazy(() =>
	import('../Pages/PagesLogin/PagesLogin').then(module => ({
		...module,
		default: module.PagesLogin,
	}))
);

// ?import { PagesRegister } from '../Pages/PagesRegister/PagesRegister';
const PagesRegister = lazy(() =>
	import('../Pages/PagesRegister/PagesRegister').then(module => ({
		...module,
		default: module.PagesRegister,
	}))
);

export function App() {
	const dispatch = useDispatch();
	const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
	useEffect(() => {
		dispatch(fetchCurrentUser());
	}, [dispatch]);

	return (
		isFetchingCurrentUser && (
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						index
						element={
							<PublicRoute>
								<Home />
							</PublicRoute>
						}
					></Route>
					<Route
						path="contacts"
						element={
							<PrivateRoute redirect="/login">
								<PagesContact />
							</PrivateRoute>
						}
					></Route>
					<Route
						path="register"
						element={
							// !=========== Протестить '/'
							<PublicRoute restricted redirect="/contacts">
								<PagesRegister />
							</PublicRoute>
						}
					></Route>
					<Route
						path="login"
						element={
							<PublicRoute restricted redirect="/contacts">
								<PagesLogin />
							</PublicRoute>
						}
					></Route>
					<Route path="*" element={<Navigate to="/" />}></Route>
				</Route>
			</Routes>
		)
	);
}
