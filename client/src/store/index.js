import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { authApi } from "../api/auth";
import { usersApi } from "../api/users";
import { feedbackApi } from "../api/feedback";
import { languagesApi } from "../api/languages";
import { checkingApi } from "../api/checking";

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		[usersApi.reducerPath]: usersApi.reducer,
		[feedbackApi.reducerPath]: feedbackApi.reducer,
		[languagesApi.reducerPath]: languagesApi.reducer,
		[checkingApi.reducerPath]: checkingApi.reducer,
		authSlice,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.concat(authApi.middleware)
			.concat(usersApi.middleware)
			.concat(feedbackApi.middleware)
			.concat(languagesApi.middleware)
			.concat(checkingApi.middleware),
});

const saveToLocalStorage = state => {
	try {
		if (state.isLogged === false) {
			localStorage.clear();
			return;
		}
		for (let key in state) {
			localStorage.setItem(key, state[key]);
		}
	} catch (e) {
		console.error(e);
	}
};

store.subscribe(() => {
	saveToLocalStorage(store.getState().authSlice);
	console.log(store.getState().authSlice);
});
