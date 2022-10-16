import { DivApp } from './PagesContact.styled';
import { changeFilter } from '../../redux/Contacts/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
	getContact,
	addContact,
	deleteContact,
} from '../../redux/Contacts/contactsOperation';
import { useEffect } from 'react';
import { FilterForm } from './../../components/FilterForm/FilterForm';
import { ContactList } from './../../components/ContactList/ContactList';
import { ContactForm } from './../../components/ContactForm/ContactForm';
import { Section } from './../../components/Section/Section';
import {
	getContactItems,
	getError,
	getFilter,
} from 'redux/Contacts/contactSelector';
import { getIsLoggedIn } from './../../redux/Auth/AuthSelectors';
import { useNavigate } from 'react-router-dom';

export function PagesContact() {
	const items = useSelector(getContactItems);
	const filterState = useSelector(getFilter);
	const errorState = useSelector(getError);
	const login = useSelector(getIsLoggedIn);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	// !Нотификашка
	if (errorState) {
		alert('Десь тут помилочка)))');
	}
	useEffect(() => {
		dispatch(getContact());
	}, [dispatch, login, navigate]);

	const getValueForm = dataValue => {
		if (checkContacts(dataValue.name)) {
			return alert(`${dataValue.name} is already in contacts`);
		}
		dispatch(addContact(dataValue));
	};

	const checkContacts = contact => {
		return items.find(el => el.name.toUpperCase() === contact.toUpperCase());
	};

	const filtrationContact = () => {
		const currentFilter = filterState.toUpperCase();
		return items.filter(element => {
			return element.name.toUpperCase().includes(currentFilter);
		});
	};

	return (
		<DivApp>
			<Section title="Phonebook">
				<ContactForm submitForm={getValueForm}></ContactForm>
			</Section>
			<Section title="Contact">
				<FilterForm
					onChange={event => dispatch(changeFilter(event.currentTarget.value))}
				></FilterForm>
				<ContactList
					contacts={filtrationContact()}
					deleteContact={id => dispatch(deleteContact(id))}
				></ContactList>
			</Section>
		</DivApp>
	);
}
