import styled from '@emotion/styled';

export const MyLi = styled.li`
	color: #b4886b;
	font-weight: bold;
	display: flex;
	list-style: none;
	margin-bottom: 10px;
	justify-content: space-between;
	align-items: baseline;
`;
export const MyButton = styled.button`
	margin-top: 10px;
	text-decoration: none;
	display: inline-block;
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
