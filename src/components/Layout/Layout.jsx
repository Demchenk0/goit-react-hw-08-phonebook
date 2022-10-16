import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { UserMenu } from './../UserMenu/UserMenu';
import { getIsLoggedIn } from './../../redux/Auth/AuthSelectors';
import { useSelector } from 'react-redux';

export function Layout() {
	const isLoggedIn = useSelector(getIsLoggedIn);
	return (
		<div>
			<header>
				<nav>
					<NavLink end to="/">
						Home
					</NavLink>
					{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
					{isLoggedIn ? (
						<UserMenu></UserMenu>
					) : (
						<>
							<NavLink to="/login">Log in</NavLink>
							<NavLink to="/register">Register</NavLink>
						</>
					)}
				</nav>
			</header>
			<main>
				<Suspense fallback={'Loading'}>
					<Outlet />
				</Suspense>
			</main>
		</div>
	);
}
