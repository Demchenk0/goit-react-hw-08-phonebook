import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { UserMenu } from './../UserMenu/UserMenu';
import { getIsLoggedIn } from './../../redux/Auth/AuthSelectors';
import { useSelector } from 'react-redux';
import {
	LayoutHeader,
	LayoutNav,
	LayoultContainer,
	LayoutLink,
} from './Layout.styled';

export function Layout() {
	const isLoggedIn = useSelector(getIsLoggedIn);
	return (
		<div>
			<LayoutHeader>
				<LayoutNav>
					<LayoultContainer>
						<LayoutLink end to="/">
							Home
						</LayoutLink>
						{isLoggedIn && <LayoutLink to="/contacts">Contacts</LayoutLink>}
					</LayoultContainer>
					<LayoultContainer>
						{isLoggedIn ? (
							<UserMenu></UserMenu>
						) : (
							<>
								<LayoutLink to="/login">Log in</LayoutLink>
								<LayoutLink to="/register">Register</LayoutLink>
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
