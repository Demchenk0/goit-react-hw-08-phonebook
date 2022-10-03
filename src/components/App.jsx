import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { Section } from './Section/Section';
import { FilterForm } from './FilterForm';
import { ContactList } from './ContactList';
import { DivApp } from './App.styled';

const originalContacts = [
	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
	{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
	{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
	{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
	const myContacts = localStorage.getItem('contacts');
	const parsedContacts = JSON.parse(myContacts);

	// todo Проверка на наличие Контактов!!!
	const [contacts, setContacts] = useState(() =>
		parsedContacts?.length > 0 ? parsedContacts : originalContacts
	);

	const [filter, setFilter] = useState('');

	useEffect(() => {
		localStorage.setItem('contacts', JSON.stringify(contacts));
	}, [contacts]);

	const getValueForm = dataValue => {
		if (checkContacts(dataValue.name)) {
			return alert(`${dataValue.name} is already in contacts`);
		}
		setContacts(prevContacts => [...prevContacts, dataValue]);
	};

	const checkContacts = contact => {
		return contacts.find(el => el.name.toUpperCase() === contact.toUpperCase());
	};

	const onChange = event => {
		const { value } = event.currentTarget;
		setFilter(value);
	};

	const filtrationContact = () => {
		const currentFilter = filter.toUpperCase();
		return contacts.filter(element => {
			return element.name.toUpperCase().includes(currentFilter);
		});
	};

	const onDelContact = id => {
		setContacts(
			contacts.filter(element => {
				return element.id !== id;
			})
		);
	};

	return (
		<DivApp>
			<Section title="Phonebook">
				<ContactForm submitForm={getValueForm}></ContactForm>
			</Section>
			<Section title="Contact">
				<FilterForm onChange={onChange}></FilterForm>
				<ContactList
					contacts={filtrationContact()}
					deleteContact={onDelContact}
				></ContactList>
			</Section>
		</DivApp>
	);
}
