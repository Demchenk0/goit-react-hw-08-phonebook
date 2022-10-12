import { createSlice } from '@reduxjs/toolkit';
import { getContact, addContact, deleteContact } from './operation';

const originalContacts = {
	contacts: { items: [], isLoading: false, error: null },
	filter: '',
};
const contactsSlice = createSlice({
	// Ім'я слайсу
	name: 'contacts',
	// Початковий стан редюсера слайсу
	initialState: originalContacts,
	// Об'єкт редюсерів
	reducers: {
		// addContacts(state, action) {
		// 	state.contacts.push(action.payload);
		// },
		// deleteContacts(state, action) {
		// 	state.contacts = state.contacts.filter(
		// 		element => element.id !== action.payload
		// 	);
		// },

		changeFilter(state, action) {
			state.filter = action.payload;
		},
	},
	extraReducers: {
		[getContact.pending]({ contacts }) {
			contacts.isLoading = true;
		},
		[getContact.fulfilled]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = null;
			contacts.items = payload;
		},
		[getContact.rejected]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = payload;
		},
		[addContact.pending]({ contacts }) {
			contacts.isLoading = true;
		},
		[addContact.fulfilled]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = null;
			contacts.items = [...contacts.items, payload];
		},
		[addContact.rejected]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = payload;
		},
		[deleteContact.pending]({ contacts }) {
			contacts.isLoading = true;
		},
		[deleteContact.fulfilled]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = null;
			contacts.items = contacts.items.filter(
				element => element.id !== payload.id
			);
		},
		[deleteContact.rejected]({ contacts }, { payload }) {
			contacts.isLoading = false;
			contacts.error = payload;
		},
	},
});

// Генератори екшенів
export const { addContacts, deleteContacts, changeFilter } =
	contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
