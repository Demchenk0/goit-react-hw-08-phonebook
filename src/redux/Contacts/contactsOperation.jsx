import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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
			await axios.delete(`/contacts/${id}`);
			return id;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
