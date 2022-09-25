import React from 'react';
import { ContactForm } from './ContactForm';
import { Section } from './Section/Section';
import { FilterForm } from './FilterForm';
import { ContactList } from './ContactList';
import { DivApp } from './App.styled';

export class App extends React.Component {
	state = {
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
		],
		filter: '',
	};

	// todo Добавления новых контактов!!

	getValueForm = dataValue => {
		if (this.checkContacts(dataValue.name)) {
			return alert(`${dataValue.name} is already in contacts`);
		}
		this.setState(({ contacts }) => {
			return {
				contacts: [...contacts, dataValue],
			};
		});
		console.log(this.state);
	};

	// todo Проверка контактов

	checkContacts = contact => {
		return this.state.contacts.find(
			el => el.name.toUpperCase() === contact.toUpperCase()
		);
	};

	onChange = event => {
		event.preventDefault();
		const { value } = event.currentTarget;
		this.setState({ filter: value });
		console.log(this.state.filter);

		// todo добавляет значения в наш Филтер
	};

	filtrationContact = () => {
		const currentFilter = this.state.filter.toUpperCase();
		return this.state.contacts.filter(element => {
			return element.name.toUpperCase().includes(currentFilter);
		});
	};

	onDelContact = id => {
		this.setState({
			contacts: this.state.contacts.filter(element => {
				return element.id !== id;
			}),
		});
	};

	render() {
		return (
			<DivApp>
				<Section title="Phonebook">
					<ContactForm submitForm={this.getValueForm}></ContactForm>
				</Section>
				<Section title="Contact">
					<FilterForm onChange={this.onChange}></FilterForm>
					<ContactList
						contacts={this.filtrationContact()}
						deleteContact={this.onDelContact}
					></ContactList>
				</Section>
			</DivApp>
		);
	}
}
