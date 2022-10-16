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
import { getIsLoading } from 'redux/Contacts/contactSelector';

const schema = yup.object().shape({
	name: yup.string().required(),
	number: yup.string().required(),
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
	const isLoading = useSelector(getIsLoading);
	const initialValues = {
		name: '',
		number: '',
	};

	const onSubmitForm = ({ name, number }, { resetForm }) => {
		const newContact = {
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
						name="number"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
					/>
					<FormError name="number" title="title" />
				</MyLabel>
				<MyButton type="submit" disabled={isLoading}>
					{isLoading ? '...Loading' : 'Add contact'}
				</MyButton>
			</MyForm>
		</Formik>
	);
}

ContactForm.propTypes = {
	submitForm: PropTypes.func.isRequired,
};
