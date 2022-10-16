import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PagesRegister } from '../Pages/PagesRegister/PagesRegister';
import { PagesContact } from '../Pages/PagesContact/PagesContact';
import { PagesLogin } from '../Pages/PagesLogin/PagesLogin';
import { Home } from '../Pages/Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { getIsFetchingCurrentUser } from 'redux/Auth/AuthSelectors';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/Auth/AuthOperation';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

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
