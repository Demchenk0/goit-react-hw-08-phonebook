import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './AuthOperation';

const initialState = {
	user: {
		name: null,
		email: null,
	},
	token: null,
	isLoggedIn: false,
	isLoading: false,
	error: null,
	isFetchingCurrentUser: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		// *Registration =========
		[register.pending](state) {
			state.isLoading = true;
		},
		[register.fulfilled](state, { payload }) {
			state.user = payload.user;
			state.token = payload.token;
			state.isLoggedIn = true;
			state.isLoading = false;
			state.error = null;
		},
		[register.rejected](state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},

		// *JIogin========

		[logIn.pending](state) {
			state.isLoading = true;
		},
		[logIn.fulfilled](state, { payload }) {
			state.user = payload.user;
			state.token = payload.token;
			state.isLoggedIn = true;
			state.isLoading = false;
			state.error = null;
		},
		[logIn.rejected](state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},

		// *JIog out=================
		[logOut.pending](state) {
			state.isLoading = true;
		},
		[logOut.fulfilled](state) {
			state.user = { name: null, email: null };
			state.token = null;
			state.isLoggedIn = false;
			state.isLoading = false;
			state.error = null;
		},
		[logOut.rejected](state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},
		// *Refresh =========
		[fetchCurrentUser.pending](state) {
			state.isLoading = true;
			state.isFetchingCurrentUser = false;
		},
		[fetchCurrentUser.fulfilled](state, { payload }) {
			state.user = payload;
			state.isLoggedIn = true;
			state.isLoading = false;
			state.isFetchingCurrentUser = true;
			state.error = null;
		},
		[fetchCurrentUser.rejected](state, { payload }) {
			state.isFetchingCurrentUser = true;
			state.isLoading = false;
			state.error = payload;
		},
	},
});

export const authReducer = authSlice.reducer;
