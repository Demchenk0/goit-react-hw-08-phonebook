import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const LayoutHeader = styled.header`
	display: flex;
	justify-content: center;
	padding: 10px 0px;
	font-size: 22px;
	margin-left: auto;
	margin-right: auto;
	width: 700px;
`;
export const LayoutNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	width: 100%;
`;
export const LayoultContainer = styled.div`
	display: flex;
	gap: 30px;
	list-style: none;
`;
export const LayoutLink = styled(NavLink)`
	color: black;
	text-decoration: none;
	&.active {
		border-bottom: solid 3px #b4886b;
		color: #099fff;
	}
	:hover:not(.active) {
		color: #099fff;
	}
`;
