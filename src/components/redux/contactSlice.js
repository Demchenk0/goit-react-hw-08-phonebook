import { createSlice } from '@reduxjs/toolkit';

const originalContacts = {
	contacts: [
		{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
		{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
		{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
		{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
	],
	filter: '',
};
const contactsSlice = createSlice({
	// Ім'я слайсу
	name: 'contacts',
	// Початковий стан редюсера слайсу
	initialState: originalContacts,
	// Об'єкт редюсерів
	reducers: {
		addContacts(state, action) {
			state.contacts.push(action.payload);
		},
		deleteContacts(state, action) {
			state.contacts = state.contacts.filter(
				element => element.id !== action.payload
			);
		},

		changeFilter(state, action) {
			state.filter = action.payload;
		},
	},
});

// Генератори екшенів
export const { addContacts, deleteContacts, changeFilter } =
	contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
