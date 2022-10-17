import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { UserMenu } from './../UserMenu/UserMenu';
import { getIsLoggedIn } from './../../redux/Auth/AuthSelectors';
import { useSelector } from 'react-redux';
import { LayoutHeader, LayoutNav, LayoultContainer } from './Layout.styled';

export function Layout() {
	const isLoggedIn = useSelector(getIsLoggedIn);
	return (
		<div>
			<LayoutHeader>
				<LayoutNav>
					<LayoultContainer>
						<NavLink end to="/">
							Home
						</NavLink>
					</LayoultContainer>
					<LayoultContainer>
						{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
						{isLoggedIn ? (
							<UserMenu></UserMenu>
						) : (
							<>
								<NavLink to="/login">Log in</NavLink>
								<NavLink to="/register">Register</NavLink>
							</>
						)}
					</LayoultContainer>
				</LayoutNav>
			</LayoutHeader>
			<main>
				<Suspense fallback={'Loading'}>
					<Outlet />
				</Suspense>
			</main>
		</div>
	);
}
