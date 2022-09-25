import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const MyForm = styled(Form)`
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: center;
`;

export const MyLabel = styled.label`
	color: #b4886b;
	font-weight: bold;
	display: block;
	margin-top: 20px;
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

export const MyInput = styled(Field)`
	border: 1px solid #cccccc;
	border-radius: 3px;
	background: #ffffff !important;
	outline: none;
	height: 24px;
	color: #cccccc;
	font-size: 11px;
	font-family: Tahoma;
	width: 100%;
`;
export const ErrorText = styled.p`
	display: flex;
	flex-wrap: wrap;
	font-size: 12px;
	width: 200px;
`;
