import { AnyAction, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./reducers";

export const store = configureStore({
	reducer: rootReducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	AnyAction
>;
