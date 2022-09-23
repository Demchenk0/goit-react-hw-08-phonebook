import React from 'react';
import { nanoid } from 'nanoid';
import styled from '@emotion/styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
	name: yup.string().required(),
	number: yup.number().required(),
});

const Input = styled(Field)``;

export function ContactForm({ submitForm }) {
	const initialValues = {
		name: '',
		number: '',
	};

	const onSubmitForm = ({ name, number }, { resetForm }) => {
		const newContact = {
			id: nanoid(),
			name: name,
			number: number,
		};
		// !передача нового контакта в APP!
		submitForm(newContact);
		resetForm();
	};
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={schema}
			onSubmit={onSubmitForm}
		>
			<Form>
				<label>
					Name
					<Input
						type="text"
						name="name"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
					<ErrorMessage name="name" component="div"></ErrorMessage>
				</label>
				<label>
					Number
					<Input
						type="tel"
						name="number"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
					/>
					<ErrorMessage name="number" component="div"></ErrorMessage>
				</label>
				<button type="submit">All contact</button>
			</Form>
		</Formik>
	);
}
