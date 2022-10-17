import styled from '@emotion/styled';

export const UserContainer = styled.div`
	display: flex;
	text-align: center;
	align-items: flex-end;
	margin-left: auto;
	border-radius: 2em;
	flex-direction: column;
	/* box-shadow: rgb(0 0 0 / 40%) 0px 30px 90px; */
	/* background-color: #d5d2d2; */
`;
export const UserText = styled.p`
	display: flex;
	flex-wrap: wrap;
	font-size: 20px;
`;
export const UserButton = styled.button`
	margin-top: 10px;
	text-decoration: none;
	display: flex;
	text-align: center;
	color: white;
	padding: 10px 20px;
	border-radius: 10px;
	font-family: 'Montserrat', sans-serif;
	text-transform: uppercase;
	letter-spacing: 2px;
	background-image: linear-gradient(
		to right,
		#9eefe1 0%,
		#4830f0 51%,
		#9eefe1 100%
	);
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
	border: none;
	cursor: pointer;
`;
