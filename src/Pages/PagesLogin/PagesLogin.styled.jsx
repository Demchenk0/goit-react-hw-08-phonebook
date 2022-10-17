import styled from '@emotion/styled';

export const LoginContainer = styled.div`
	display: flex;
	text-align: center;
	align-items: center;
	/* width: 700px; */
	margin-left: auto;
	margin-right: auto;
	border-radius: 2em;
	flex-direction: column;
	/* box-shadow: rgb(0 0 0 / 40%) 0px 30px 90px; */
	/* background-color: #d5d2d2; */
`;

export const LoginButton = styled.button`
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
export const LoginLabel = styled.label`
	color: #b4886b;
	font-weight: bold;
	display: block;
	margin-top: 20px;
`;

export const LoginForm = styled.form`
	display: flex;
	text-align: center;
	align-items: end;
	flex-direction: column;
`;

export const LoginInput = styled.input`
	border: 1px solid #cccccc;
	border-radius: 3px;
	background: #ffffff !important;
	outline: none;
	height: 24px;
	color: #cccccc;
	font-size: 11px;
	font-family: Tahoma;
	margin-left: 10px;
`;
