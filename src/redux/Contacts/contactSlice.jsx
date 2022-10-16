import { createSlice } from '@reduxjs/toolkit';
import { getContact, addContact, deleteContact } from './contactsOperation';

const originalContacts = {
	items: [],
	isLoading: false,
	error: null,
	filter: '',
};
const contactsSlice = createSlice({
	// Ім'я слайсу
	name: 'contacts',
	// Початковий стан редюсера слайсу
	initialState: originalContacts,
	// Об'єкт редюсерів
	reducers: {
		changeFilter(state, action) {
			state.filter = action.payload;
		},
	},
	extraReducers: {
		[getContact.pending](state) {
			state.isLoading = true;
		},
		[getContact.fulfilled](state, { payload }) {
			state.isLoading = false;
			state.error = null;
			state.items = payload;
		},
		[getContact.rejected](state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},
		// !Add Contacts
		[addContact.pending](state) {
			state.isLoading = true;
		},
		[addContact.fulfilled](state, { payload }) {
			state.isLoading = false;
			state.error = null;
			state.items = [...state.items, payload];
		},
		[addContact.rejected](state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},

		// !Delete contacts
		[deleteContact.pending](state) {
			state.isLoading = true;
		},
		[deleteContact.fulfilled](state, { payload }) {
			state.isLoading = false;
			state.error = null;
			state.items = state.items.filter(element => element.id !== payload);
		},
		[deleteContact.rejected](state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},
	},
});

// Генератори екшенів
export const { addContacts, deleteContacts, changeFilter } =
	contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
