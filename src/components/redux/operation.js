import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6346ff3304a6d457579e46bf.mockapi.io';

export const getContact = createAsyncThunk(
	'contacts/fetchAll',
	async (_, thunkAPI) => {
		try {
			const allContacts = await axios.get(`/contacts`);
			return allContacts.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const addContact = createAsyncThunk(
	'contacts/addAll',
	async (item, thunkAPI) => {
		try {
			const addedContacts = await axios.post(`/contacts`, item);
			return addedContacts.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	'contacts/deleteAll',
	async (id, thunkAPI) => {
		try {
			const deletedContacts = await axios.delete(`/contacts/${id}`);
			return deletedContacts.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
