import React from 'react';
import {
	MyForm,
	MyLabel,
	MyButton,
	MyInput,
	ErrorText,
} from './ContactForm.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const schema = yup.object().shape({
	name: yup.string().required(),
	phone: yup.string().required(),
});

const FormError = ({ name }) => {
	return (
		<ErrorMessage
			name={name}
			render={messege => <ErrorText>{messege}</ErrorText>}
		/>
	);
};

export function ContactForm({ submitForm }) {
	const isLoading = useSelector(state => state.contacts.isLoading);
	const initialValues = {
		name: '',
		phone: '',
	};

	const onSubmitForm = ({ name, phone }, { resetForm }) => {
		const newContact = {
			name: name,
			phone: phone,
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
			<MyForm>
				<MyLabel>
					Name
					<MyInput
						type="text"
						name="name"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
					<FormError name="name" title="title" />
				</MyLabel>
				<MyLabel>
					Number
					<MyInput
						type="tel"
						name="phone"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
					/>
					<FormError name="phone" title="title" />
				</MyLabel>
				<MyButton type="submit" disabled={isLoading}>
					{' '}
					{isLoading ? 'Loading' : 'All contact'}
				</MyButton>
			</MyForm>
		</Formik>
	);
}

ContactForm.propTypes = {
	submitForm: PropTypes.func.isRequired,
};
