import { ContactForm } from './ContactForm';
import { Section } from './Section/Section';
import { FilterForm } from './FilterForm';
import { ContactList } from './ContactList';
import { DivApp } from './App.styled';
import {
	addContacts,
	deleteContacts,
	changeFilter,
} from './redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';

export function App() {
	const state = useSelector(state => state);
	const dispatch = useDispatch();

	const getValueForm = dataValue => {
		if (checkContacts(dataValue.name)) {
			return alert(`${dataValue.name} is already in contacts`);
		}
		dispatch(addContacts(dataValue));
	};

	const checkContacts = contact => {
		return state.contacts.find(
			el => el.name.toUpperCase() === contact.toUpperCase()
		);
	};

	const filtrationContact = () => {
		const currentFilter = state.filter.toUpperCase();
		return state.contacts.filter(element => {
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
					deleteContact={id => dispatch(deleteContacts(id))}
				></ContactList>
			</Section>
		</DivApp>
	);
}
